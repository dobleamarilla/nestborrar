import { MovimientosInterface } from "./movimientos.interface";
import * as schMovimientos from "./movimientos.mongodb";

export class MovimientosClase {
    getMovimientosIntervalo(inicioTime: number, finalTime: number): Promise<MovimientosInterface[]> {
        return schMovimientos.getMovimientosIntervalo(inicioTime, finalTime);
    }
    // ELIMINAR ESTOS ASYNC, SOLO ERA TEMPORAL
    async nuevaSalida() {
        return true;
    }

    async nuevaEntrada() {
        return true;
    }
}

export const movimientosInstance = new MovimientosClase();
