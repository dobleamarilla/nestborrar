import { Controller, Post, Body, Query } from '@nestjs/common';
import { ticketsInstance } from './tickets.clase';
import { cajaInstance } from '../caja/caja.clase';

@Controller('tickets')
export class TicketsController {

    @Post('getTicketsIntervalo')
    getTicketsIntervalo(@Query() params) {
        return cajaInstance.getInfoCaja().then((infoCaja) => {
            if (infoCaja != null) {
                return ticketsInstance.getTicketsIntervalo(infoCaja.inicioTime, Date.now());
            } else {
                return [];
            }
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }
}
