import { TicketsInterface } from "./tickets.interface";
import * as schTickets from "./tickets.mongodb";

export class TicketsClase {

    getTicketsIntervalo(fechaInicio: number, fechaFinal: number): Promise<TicketsInterface[]> {
        return schTickets.getTicketsIntervalo(fechaInicio, fechaFinal).then((resultado: TicketsInterface[]) => {
            return resultado;
        }).catch((err) => {
            console.log(err);
            return null;
        });
    }
}

export const ticketsInstance = new TicketsClase();
