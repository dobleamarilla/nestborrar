import { CajaInterface, cajaVacia } from "./caja-interface.interface";
import * as schCajas from "./caja.mongodb";
import * as schTickets from "../tickets/tickets.mongodb";
import { tocGame } from "src/toc";
import { TicketsInterface } from "src/tickets/tickets.interface";
import { MovimientosInterface } from "src/movimientos/movimientos.interface";
const TIPO_ENTRADA = 'ENTRADA';
const TIPO_SALIDA = 'SALIDA';

export class CajaClase {

    getInfoCaja(): Promise<CajaInterface> {
        return schCajas.getInfoCaja();
    }

    cajaAbierta(): Promise<boolean> {
        return this.getInfoCaja().then((infoCaja) => {
            if (infoCaja == null) {
                return false;
            } else {
                return true;
            }
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    abrirCaja(unaCaja: CajaInterface): Promise<boolean> {
        // Crear el documento con ID = "CAJA"
        return schCajas.setInfoCaja(unaCaja).then((result) => {
            if (result.acknowledged) {
                return true;
            } else {
                return false;
            }
        }).catch((err) => {
            console.log(err);
            return false;
        });        
    }

    async cerrarCaja(total: number, detalleCierre, guardarInfoMonedas, totalDatafono3G: number, totalClearOne: number) { //Promise<boolean> {
        let estaAbierta = await this.cajaAbierta();

        if (estaAbierta) {
            let cajaActual: CajaInterface = await this.getInfoCaja();
            cajaActual.totalCierre = total;
            cajaActual.detalleCierre = detalleCierre;
            cajaActual.finalTime = Date.now();
            cajaActual.idDependienta = await tocGame.trabajadores.getCurrentIdTrabajador(); // this.getCurrentTrabajador()._id;
            cajaActual.totalDatafono3G = totalDatafono3G;
            cajaActual.totalClearOne = totalClearOne;
            cajaActual = await this.calcularDatosCaja(cajaActual);
    
            const deudaDeliveroo = await schTickets.getDedudaDeliveroo(cajaActual.inicioTime, cajaActual.finalTime);
            const deudaGlovo = await schTickets.getDedudaGlovo(cajaActual.inicioTime, cajaActual.finalTime);
            const totalTkrs = await schTickets.getTotalTkrs(cajaActual.inicioTime, cajaActual.finalTime);
    
            let objEmail = {
                caja: cajaActual,
                nombreTienda: tocGame.parametros.getParametros().nombreTienda,
                nombreDependienta: (await tocGame.trabajadores.getCurrentTrabajador()).nombre,
                arrayMovimientos: await tocGame.movimientos.getMovimientosIntervalo(cajaActual.inicioTime, cajaActual.finalTime), // ipcRenderer.sendSync('get-rango-movimientos', {fechaInicio: cajaActual.inicioTime, fechaFinal: cajaActual.finalTime}),
                deudaGlovo: deudaGlovo,
                deudaDeliveroo: deudaDeliveroo,
                totalTkrs: totalTkrs
            }
    
            ipcRenderer.send('guardarCajaSincro', cajaActual);
            
            ipcRenderer.send('enviar-email', objEmail);
            ipcRenderer.send('set-monedas', guardarInfoMonedas);
            this.borrarCaja()
            vueCaja.cerrarModal();
            this.iniciar();
            //return false;

        } else {
            return false;
        }
    }

    async calcularDatosCaja(unaCaja: CajaInterface): Promise<CajaInterface> {
        var arrayTicketsCaja: TicketsInterface[] = await schTickets.getTicketsIntervalo(unaCaja.inicioTime, unaCaja.finalTime);
        var arrayMovimientos: MovimientosInterface[] = await tocGame.movimientos.getMovimientosIntervalo(unaCaja.inicioTime, unaCaja.finalTime);
        var totalTickets = 0;
        var nombreTrabajador = (await tocGame.trabajadores.getCurrentTrabajador()).nombre;
        var descuadre = 0;
        var nClientes = 0;
        const params = tocGame.parametros.getParametros();
        let currentCaja = await this.getInfoCaja();
        if(arrayTicketsCaja.length > 0) {
            currentCaja.primerTicket = arrayTicketsCaja[0]._id;
            currentCaja.ultimoTicket = arrayTicketsCaja[arrayTicketsCaja.length-1]._id;
        }
        
        var nombreTienda = params.nombreTienda;
        var fechaInicio = currentCaja.inicioTime;
        var totalTarjeta = 0;
        var totalEnEfectivo = 0;
        var cambioInicial = currentCaja.totalApertura;
        var cambioFinal = currentCaja.totalCierre;
        var totalSalidas = 0;
        var totalEntradas = 0;
        var recaudado = 0; //this.caja.totalCierre-this.caja.totalApertura + totalSalidas - totalEntradas;
        var totalDeuda = 0;

        for(let i = 0; i < arrayMovimientos.length; i++) {
            if(arrayMovimientos[i].tipo === TIPO_SALIDA) {
                if(arrayMovimientos[i].tipoExtra != 'CONSUMO_PERSONAL') {
                    totalSalidas += arrayMovimientos[i].valor;
                }                
            } else {
                if(arrayMovimientos[i].tipo === TIPO_ENTRADA) {
                    totalEntradas += arrayMovimientos[i].valor;
                }
            }
        }
        for(let i = 0; i < arrayTicketsCaja.length; i++) {
            nClientes++;
            totalTickets += arrayTicketsCaja[i].total;
            
            switch(arrayTicketsCaja[i].tipoPago) {
                case "TARJETA": totalTarjeta += arrayTicketsCaja[i].total; break;
                case "EFECTIVO": 
                    recaudado += arrayTicketsCaja[i].total;
                    totalEnEfectivo += arrayTicketsCaja[i].total;
                    break;
                case "DEUDA": totalDeuda += arrayTicketsCaja[i].total; break;
                case "TICKET_RESTAURANT": 
                    recaudado += arrayTicketsCaja[i].total;
                    totalEnEfectivo += arrayTicketsCaja[i].total;
                    break;
            }
        }
        
        currentCaja.calaixFetZ = totalTickets;
        currentCaja.infoExtra.cambioFinal = cambioFinal;
        currentCaja.infoExtra.cambioInicial = cambioInicial;
        currentCaja.infoExtra.totalSalidas = totalSalidas;
        currentCaja.infoExtra.totalEntradas = totalEntradas;
        currentCaja.infoExtra.totalEnEfectivo = totalEnEfectivo;
        currentCaja.infoExtra.totalTarjeta = totalTarjeta;
        currentCaja.infoExtra.totalDeuda = totalDeuda;

        descuadre = cambioFinal-cambioInicial+totalSalidas-totalEntradas-totalTickets;
        recaudado = totalTickets + descuadre - totalTarjeta - totalDeuda;
        
        const objImpresion = {
            calaixFet: totalTickets,
            nombreTrabajador: nombreTrabajador,
            descuadre: descuadre,
            nClientes: nClientes,
            recaudado: recaudado,
            arrayMovimientos: arrayMovimientos,
            nombreTienda: nombreTienda,
            fechaInicio: fechaInicio,
            fechaFinal: currentCaja.finalTime,
            totalSalidas: totalSalidas,
            totalEntradas: totalEntradas,
            cInicioCaja: cambioInicial,
            cFinalCaja: cambioFinal,
            impresora: params.tipoImpresora,
            totalTarjeta: totalTarjeta
        };

        // vuePantallaCierre.setVariables(objImpresion); ESTO ENVÍA EL DETALLE DEL CIERRE AL FRONTEND
        try {
            // this.imprimirCierreCaja(objImpresion);
            console.log("Importante, falta imprimir");
        }
        catch(err) {
            // vueToast.abrir('error', 'Impresora no detectada');
            console.log(err);
        }
        
        unaCaja.descuadre = descuadre;
        unaCaja.nClientes = nClientes;
        unaCaja.recaudado = recaudado;

        return unaCaja;
    }
}

const caja = new CajaClase();

export { caja }