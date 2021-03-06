import { articulosInstance } from "../articulos/articulos.clase";
import { paramsTicketInstance } from "../params-ticket/params-ticket.class";
import { ticketsInstance } from "../tickets/tickets.clase";
import { TicketsInterface } from "../tickets/tickets.interface";
import { trabajadoresInstance } from "../trabajadores/trabajadores.clase";
import { TrabajadoresInterface } from "../trabajadores/trabajadores.interface";
import { clienteInstance } from "../clientes/clientes.clase";
import { parametrosInstance } from "../parametros/parametros.clase";

const escpos = require('escpos');
const exec = require('child_process').exec;
const os = require('os');
escpos.USB = require('escpos-usb');
escpos.Serial = require('escpos-serialport');
escpos.Screen = require('escpos-screen');
const TIPO_ENTRADA_DINERO = 'ENTRADA';
const TIPO_SALIDA_DINERO = 'SALIDA';

/* Función auxiliar */
function dateToString2(fecha) {
    var fechaFinal = null;
    if(typeof fecha === 'string' || typeof fecha === 'number')
    {
        fechaFinal = new Date(fecha);
    }
    
    let finalYear = `${fechaFinal.getFullYear()}`;
    let finalMonth = `${fechaFinal.getMonth() + 1}`;
    let finalDay = `${fechaFinal.getDate()}`;
    let finalHours = `${fechaFinal.getHours()}`;
    let finalMinutes = `${fechaFinal.getMinutes()}`;
    let finalSeconds = `${fechaFinal.getSeconds()}`;


    if (finalMonth.length === 1) {
        finalMonth = '0' + finalMonth;
    }
    if (finalDay.length === 1) {
        finalDay = '0' + finalDay;
    }
    if (finalHours.length === 1) {
        finalHours = '0' + finalHours;
    }
    if (finalMinutes.length === 1) {
        finalMinutes = '0' + finalMinutes;
    }
    if (finalSeconds.length === 1) {
        finalSeconds = '0' + finalSeconds;
    }
    return `${finalYear}-${finalMonth}-${finalDay} ${finalHours}:${finalMinutes}:${finalSeconds}`;
}

export class Impresora {
    async imprimirTicket(idTicket: number) {
        const paramsTicket = await paramsTicketInstance.getParamsTicket();
        const infoTicket: TicketsInterface = await ticketsInstance.getTicketByID(idTicket);
        const infoTrabajador: TrabajadoresInterface = await trabajadoresInstance.getTrabajador(infoTicket.idTrabajador);
        const parametros = parametrosInstance.getParametros();
        var sendObject;

        if(infoTicket.cliente != null && infoTicket.tipoPago != 'DEUDA') {
            const infoCliente = await clienteInstance.getClienteByID(infoTicket.cliente);
            var auxNombre = '';

            if(infoCliente != null) {
                auxNombre = infoCliente.nombre;
            } else {
                auxNombre = '';
            }
            
            sendObject = {
                numFactura: infoTicket._id,
                arrayCompra: infoTicket.lista,
                total: infoTicket.total,
                visa: infoTicket.tipoPago,
                tiposIva: infoTicket.tiposIva,
                cabecera: paramsTicket[0] !== undefined ? paramsTicket[0].valorDato: '',
                pie: paramsTicket[1] !== undefined ? paramsTicket[1].valorDato: '',
                nombreTrabajador: infoTrabajador.nombreCorto,
                impresora: parametros.tipoImpresora,
                infoClienteVip: infoTicket.infoClienteVip,
                infoCliente: {
                    nombre: auxNombre,
                    puntos: 0
                }
            };
        }
        else {
            sendObject = {
                numFactura: infoTicket._id,
                arrayCompra: infoTicket.lista,
                total: infoTicket.total,
                visa: infoTicket.tipoPago,
                tiposIva: infoTicket.tiposIva,
                cabecera: paramsTicket[0] !== undefined ? paramsTicket[0].valorDato: '',
                pie: paramsTicket[1] !== undefined ? paramsTicket[1].valorDato: '',
                nombreTrabajador: infoTrabajador.nombreCorto,
                impresora: parametros.tipoImpresora,
                infoClienteVip: infoTicket.infoClienteVip,
                infoCliente: null
            };

            this._venta(sendObject);
        }
    }

    private async _venta(info) {
        const numFactura = info.numFactura;
        const arrayCompra = info.arrayCompra;
        const total = info.total;
        const tipoPago = info.visa;
        const tiposIva = info.tiposIva;
        const cabecera = info.cabecera;
        const pie = info.pie;
        const nombreDependienta = info.nombreTrabajador;
        const tipoImpresora = info.impresora;
        const infoClienteVip = info.infoClienteVip;
        const infoCliente = info.infoCliente;

        try {
            exec('echo sa | sudo -S sh /home/hit/tocGame/scripts/permisos.sh');
            if(tipoImpresora === 'USB')
            {
                var device = new escpos.USB('0x4B8', '0x202'); //USB
            }
            else
            {
                if(tipoImpresora === 'SERIE')
                {
                    var device = new escpos.Serial('/dev/ttyS0', {
                        baudRate: 115000,
                        stopBit: 2
                        });
                }
            }
    
            var printer = new escpos.Printer(device);
    
            var detalles = '';
            var pagoTarjeta = '';
            var pagoTkrs = '';
            var detalleClienteVip = '';
            var detalleNombreCliente = '';
            var detallePuntosCliente = '';
            if(infoClienteVip.esVip)
            {
                detalleClienteVip = `Nom: ${infoClienteVip.nombre}\nNIF: ${infoClienteVip.nif}\nCP: ${infoClienteVip.cp}\nCiutat: ${infoClienteVip.ciudad}\nAdr: ${infoClienteVip.direccion}\n`;
            }
    
            if(infoCliente != null) {
                detalleNombreCliente = infoCliente.nombre;
                detallePuntosCliente = 'PUNTOS: ' + infoCliente.puntos;
            }
    
            for (let i = 0; i < arrayCompra.length; i++) 
            {
                if(arrayCompra[i].promocion.esPromo)
                {
                    let nombrePrincipal = (await articulosInstance.getInfoArticulo(arrayCompra[i].promocion.infoPromo.idPrincipal)).nombre;
                    nombrePrincipal = "Oferta " + nombrePrincipal;
                    while (nombrePrincipal.length < 20) 
                    {
                        nombrePrincipal += ' ';
                    }
                    detalles += `${arrayCompra[i].unidades*arrayCompra[i].promocion.infoPromo.cantidadPrincipal}     ${nombrePrincipal.slice(0, 20)}       ${arrayCompra[i].promocion.infoPromo.precioRealPrincipal.toFixed(2)}\n`;
                    if(arrayCompra[i].promocion.infoPromo.cantidadSecundario > 0)
                    {
                        let nombreSecundario = (await articulosInstance.getInfoArticulo(arrayCompra[i].promocion.infoPromo.idSecundario)).nombre;
                        nombreSecundario = "Oferta " + nombreSecundario;
                        while (nombreSecundario.length < 20) 
                        {
                            nombreSecundario += ' ';
                        }
                        detalles += `${arrayCompra[i].unidades*arrayCompra[i].promocion.infoPromo.cantidadSecundario}     ${nombreSecundario.slice(0, 20)}       ${arrayCompra[i].promocion.infoPromo.precioRealSecundario.toFixed(2)}\n`;
                    }
                }
                else
                {
                    if (arrayCompra[i].nombre.length < 20) 
                    {
                        while (arrayCompra[i].nombre.length < 20) 
                        {
                            arrayCompra[i].nombre += ' ';
                        }
                    }
                    detalles += `${arrayCompra[i].unidades}     ${arrayCompra[i].nombre.slice(0, 20)}       ${arrayCompra[i].subtotal.toFixed(2)}\n`;
                }
                
            }
            var fecha = new Date();
            if (tipoPago == "TARJETA") 
            {
                pagoTarjeta = '----------- PAGADO CON TARJETA ---------\n';
            }
            if (tipoPago == "TICKET_RESTAURANT") 
            {
                pagoTkrs    = '----- PAGADO CON TICKET RESTAURANT -----\n';
            }
            var pagoDevolucion: string = '';
    
            if(tipoPago == "DEVOLUCION")
            {
                pagoDevolucion = '-- ES DEVOLUCION --\n';
            }
    
    
    
            var detalleIva4 = '';
            var detalleIva10 = '';
            var detalleIva21 = '';
            var detalleIva = '';
            if (tiposIva.importe1 > 0) 
            {
                detalleIva4 = `${tiposIva.base1.toFixed(2)}        4%: ${tiposIva.valorIva1.toFixed(2)}      ${tiposIva.importe1.toFixed(2)}\n`;
            }
            if (tiposIva.importe2 > 0) 
            {
                detalleIva10 = `${tiposIva.base2.toFixed(2)}        10%: ${tiposIva.valorIva2.toFixed(2)}      ${tiposIva.importe2.toFixed(2)}\n`;
            }
            if (tiposIva.importe3 > 0) 
            {
                detalleIva21 = `${tiposIva.base3.toFixed(2)}       21%: ${tiposIva.valorIva3.toFixed(2)}      ${tiposIva.importe3.toFixed(2)}\n`;
            }
            detalleIva = detalleIva4 + detalleIva10 + detalleIva21;
            var infoConsumoPersonal = '';
            if(tipoPago == "CONSUMO_PERSONAL")
            {
                infoConsumoPersonal = '---------------- Dte. 100% --------------';
                detalleIva = '';
            }
    
            device.open(function () 
            {
                printer
                    .encode('latin1')
                    .font('a')
                    .style('b')
                    .size(0, 0)
                    .text(cabecera)
                    .text(`Data: ${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}  ${(fecha.getHours()<10?'0':'') + fecha.getHours()}:${(fecha.getMinutes()<10?'0':'') + fecha.getMinutes()}`)
                    .text('Factura simplificada N: ' + numFactura)
                    .text('Ates per: ' + nombreDependienta)
                    .text(detalleClienteVip)
                    .text(detalleNombreCliente)
                    .text(detallePuntosCliente)
                    .control('LF')
                    .control('LF')
                    .control('LF')
                    .control('LF')
                    .text('Quantitat      Article        Import (EUR)')
                    .text('-----------------------------------------')
                    .align('LT')
                    .text(detalles)
                    .align('CT')
                    .text(pagoTarjeta)
                    .text(pagoTkrs)
                    .align('LT')
                    .text(infoConsumoPersonal)
                    .size(1, 1)
                    .text(pagoDevolucion)
                    .text('TOTAL: ' + total.toFixed(2) + ' EUR \n')
                    .size(0, 0)
                    .align('CT')
                    .text('Base IVA         IVA         IMPORT')
                    .text(detalleIva)
                    .text('-- ES COPIA --')
                    .text(pie)
                    .control('LF')
                    .control('LF')
                    .control('LF')
                    .cut('PAPER_FULL_CUT')
                    .close()
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    imprimirSalida(cantidad: number, fecha: number, nombreTrabajador: string, nombreTienda: string, concepto: string, tipoImpresora: string, codigoBarras: string) {
        try {
            const fechaStr = dateToString2(fecha);
            exec('echo sa | sudo -S sh /home/hit/tocGame/scripts/permisos.sh');
            if(tipoImpresora === 'USB') {
                var device = new escpos.USB('0x4B8', '0x202'); // USB
            }
            else if(tipoImpresora === 'SERIE') {
                var device = new escpos.Serial('/dev/ttyS0', {
                    baudRate: 115000,
                    stopBit: 2
                });
            }
            
            const options = { encoding: "GB18030" };
            const printer = new escpos.Printer(device, options);
            device.open(function () {
                printer
                    .font('a')
                    .style('b')
                    .align('CT')
                    .size(0, 0)
                    .text(nombreTienda)
                    .text(fechaStr)
                    .text("Dependienta: " + nombreTrabajador)
                    .text("Retirada efectivo: " + cantidad)
                    .size(1, 1)
                    .text(cantidad)
                    .size(0, 0)
                    .text("Concepto")
                    .size(1, 1)
                    .text(concepto)
                    .text('')
                    .barcode(codigoBarras.slice(0, 12), "EAN13", 4)
                    .text('')
                    .text('')
                    .text('')
                    .cut()
                    .close()
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}
export const impresoraInstance = new Impresora();