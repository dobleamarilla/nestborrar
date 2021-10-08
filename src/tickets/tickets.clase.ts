import { TicketsInterface } from "./tickets.interface";
import * as schTickets from "./tickets.mongodb";
import { trabajadoresInstance } from "../trabajadores/trabajadores.clase";
import { cestas } from "../cestas/cestas.clase";
import { parametrosInstance } from "../parametros/parametros.clase";

export class TicketsClase {

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
}

export const ticketsInstance = new TicketsClase();
