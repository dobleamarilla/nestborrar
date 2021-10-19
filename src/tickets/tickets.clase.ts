import { TicketsInterface } from "./tickets.interface";
import * as schTickets from "./tickets.mongodb";
import { trabajadoresInstance } from "../trabajadores/trabajadores.clase";
import { cestas } from "../cestas/cestas.clase";
import { parametrosInstance } from "../parametros/parametros.clase";
import { movimientosInstance } from "../movimientos/movimientos.clase";
const net = require('net');

export class TicketsClase {

    getTicketByID(idTicket: number): Promise <TicketsInterface> {
        return schTickets.getTicketByID(idTicket).then((res: TicketsInterface) => {
            return res;
        }).catch((err) => {
            console.log(err);
            return null;
        });
    }

    getTicketsIntervalo(fechaInicio: number, fechaFinal: number): Promise<TicketsInterface[]> {
        return schTickets.getTicketsIntervalo(fechaInicio, fechaFinal).then((resultado: TicketsInterface[]) => {
            return resultado;
        }).catch((err) => {
            console.log(err);
            return null;
        });
    }

    getUltimoTicket() {
        return schTickets.getUltimoTicket().then((ultimoTicket: number) => {
            if (ultimoTicket != null) {
                return ultimoTicket;
            } else {
                return 0;
            }
        });
    }

    insertarTicket(ticket: TicketsInterface) {
        return schTickets.nuevoTicket(ticket).then((res) => {
            if (res.acknowledged) {
                return true;
            } else {
                return false;
            }
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    async crearTicketEfectivo(total: number, idCesta: number) {
        const infoTrabajador = await trabajadoresInstance.getCurrentTrabajador();
        const nuevoIdTicket = (await this.getUltimoTicket()) + 1;
        const cesta = await cestas.getCesta(idCesta);
        console.log("La cesta es", cesta, idCesta);
        if (cesta == null || cesta.lista.length == 0) {
            console.log("Error, la cesta es null o está vacía");
            return false;
        }

        const objTicket: TicketsInterface = {
            _id: nuevoIdTicket,
            timestamp: Date.now(),
            total: total,
            lista: cesta.lista,
            tipoPago: "EFECTIVO",
            idTrabajador: infoTrabajador._id,
            tiposIva: cesta.tiposIva,
            cliente: null, // DE MOMENTO NULL PARA TODOS LOS CLIENTES
            infoClienteVip: {
                esVip : false,
                nif: '',
                nombre: '',
                cp: '',
                direccion: '',
                ciudad: ''
            }
        }

        console.log("ABRIR CAJÓN");
        if (await this.insertarTicket(objTicket)) {
            if (await cestas.borrarCesta(idCesta)) {
                if (await parametrosInstance.setUltimoTicket(objTicket._id)) {
                    return true;
                } else {
                    console.log("Errorm no se ha podido cambiar el último id ticket");
                }
            } else {
                console.log("Error, no se ha podido borrar la cesta");
            }
        } else {
            console.log("Error, no se ha podido insertar el ticket");
        }
        return false;
    }

    async crearTicketDatafono3G(total: number, idCesta: number) {
        const infoTrabajador = await trabajadoresInstance.getCurrentTrabajador();
        const nuevoIdTicket = (await this.getUltimoTicket()) + 1;
        const cesta = await cestas.getCesta(idCesta);
        console.log("La cesta es", cesta, idCesta);
        if (cesta == null || cesta.lista.length == 0) {
            console.log("Error, la cesta es null o está vacía");
            return false;
        }

        const objTicket: TicketsInterface = {
            _id: nuevoIdTicket,
            timestamp: Date.now(),
            total: total,
            lista: cesta.lista,
            tipoPago: "TARJETA",
            idTrabajador: infoTrabajador._id,
            tiposIva: cesta.tiposIva,
            cliente: null, // DE MOMENTO NULL PARA TODOS LOS CLIENTES
            infoClienteVip: {
                esVip : false,
                nif: '',
                nombre: '',
                cp: '',
                direccion: '',
                ciudad: ''
            }
        }

        console.log("ABRIR CAJÓN");
        if (await this.insertarTicket(objTicket)) {
            if (await cestas.borrarCesta(idCesta)) {
                if (await parametrosInstance.setUltimoTicket(objTicket._id)) {
                    // return await movimientosInstance.nuevaSalida();
                } else {
                    console.log("Error no se ha podido cambiar el último id ticket");
                }
            } else {
                console.log("Error, no se ha podido borrar la cesta");
            }
        } else {
            console.log("Error, no se ha podido insertar el ticket");
        }
        return false;
    }

    // async crearTicketDatafonoClearOne(total: number, idCesta: number) {
    //     const infoTrabajador = await trabajadoresInstance.getCurrentTrabajador();
    //     const nuevoIdTicket = (await this.getUltimoTicket()) + 1;
    //     const cesta = await cestas.getCesta(idCesta);
    //     console.log("La cesta es", cesta, idCesta);
    //     if (cesta == null || cesta.lista.length == 0) {
    //         console.log("Error, la cesta es null o está vacía");
    //         return false;
    //     }

    //     const objTicket: TicketsInterface = {
    //         _id: nuevoIdTicket,
    //         timestamp: Date.now(),
    //         total: total,
    //         lista: cesta.lista,
    //         tipoPago: "TARJETA",
    //         idTrabajador: infoTrabajador._id,
    //         tiposIva: cesta.tiposIva,
    //         cliente: null, // DE MOMENTO NULL PARA TODOS LOS CLIENTES
    //         infoClienteVip: {
    //             esVip : false,
    //             nif: '',
    //             nombre: '',
    //             cp: '',
    //             direccion: '',
    //             ciudad: ''
    //         }
    //     }

        
    //     return false;
    // }

    // async conexionClearOne(info: TicketsInterface) {
    //     var client = new net.Socket();
    //     client.connect(8890, '127.0.0.1', function () {
    //         var ventaCliente = 547; // info.clearOneCliente;
    //         var nombreDependienta = '';
    //         var numeroTicket = info._id;
    //         var tienda = 73; //info.clearOneTienda;
    //         var tpv = 1;// info.clearOneTpv;
    //         var tipoOperacion = 1; //1=> VENTA
    //         var importe = info.total; //EN CENTIMOS DE EURO
    //         var venta_t = `\x02${ventaCliente};${tienda};${tpv};ezequiel;${numeroTicket};${tipoOperacion};${importe};;;;;;;\x03`;
    //         console.log('cliente: ', ventaCliente, ' tienda: ', tienda, ' tpv: ', tpv, ' tipoOperacion: ', tipoOperacion, ' numeroTicket: ', numeroTicket, ' nombreDependienta: ', nombreDependienta, ' importe: ', importe);
    //         client.write(venta_t);
    //     });

    //     client.on('error', function(err){
    //         console.log(err);
    //         // event.sender.send('desactivar-espera-datafono');
    //         // event.sender.send('nuevo-toast', {tipo: 'error', mensaje: 'Datáfono no configurado'});
    //     });
    //     const aux = this;
    //     client.on('data', function (data: any) {
    //         var objEnviar = {
    //             data: data,
    //             objTicket: info
    //         };
    //         console.log('Recibido: ' + data);
    //         await aux.controlRespuestaDatafono(objEnviar); //NECESITO UN SOCKET!!!
    //         client.write('\x02ACK\x03');
    //         client.destroy();
    //     });
    //     client.on('close', function () {
    //         console.log('Conexión cerrada');
    //         client.destroy();
    //     });
    // }
    // async controlRespuestaDatafono(respuesta): Promise <boolean> {
    //     // vueCobrar.desactivoEsperaDatafono();
    //     let respuestaTexto = "";
    //     for(let i = 0; i < respuesta.data.length; i++) {
    //         respuestaTexto += String.fromCharCode(respuesta.data[i])
    //     }
    //     // ipcRenderer.send("insertarError", {error: respuestaTexto, numeroTicket:  respuesta.objTicket._id, arrayBytes: respuesta.data})

    //     //Primero STX, segundo estado transacción: correcta = 48, incorrecta != 48
    //     if(respuestaTexto.includes("DENEGADA") == false && respuestaTexto.includes("denegada") == false && respuestaTexto.includes("ERROR") == false && respuestaTexto.includes("error") == false && respuesta.data[0] == 2 && respuesta.data[1] == 48 && respuesta.data[2] == 59) { //SERÁ ACEPTADA
    //         movimientosInstance.nuevaSalida(respuesta.objTicket.total, 'Targeta', 'TARJETA', true, respuesta.objTicket._id);
    //         if (await this.insertarTicket(respuesta.objTicket)) {
    //             if (await cestas.borrarCesta(idCesta)) {
    //                 if (await parametrosInstance.setUltimoTicket(respuesta.objTicket._id)) {
    //                     return true;
    //                 } else {
    //                     console.log("Error no se ha podido cambiar el último id ticket");
    //                 }
    //             } else {
    //                 console.log("Error, no se ha podido borrar la cesta");
    //             }
    //         } else {
    //             console.log("Error, no se ha podido insertar el ticket");
    //         }
            
    //         /*var pagadoTarjeta = "Pagat Targeta: " +  respuesta.objTicket._id;
    //         this.nuevaSalidaDinero(this.auxTotalDatafono, pagadoTarjeta, pagadoTarjeta, true);*/
    //         // this.borrarCesta();
    //         // vueCobrar.cerrarModal();
    //         // vueToast.abrir('success', 'Ticket creado');
    //     } else { //SERÁ DENEGADA
    //         console.log("Data clearOne: ", respuesta.data)
    //         // vueToast.abrir('error', 'Operación DENEGADA');
    //         // // ipcRenderer.send('change-pinpad');
    //     }
    //     return false;
    //     // this.quitarClienteSeleccionado();
    // }
}

export const ticketsInstance = new TicketsClase();
