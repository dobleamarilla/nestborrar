import { MovimientosInterface } from "./movimientos.interface";
import * as schMovimientos from "./movimientos.mongodb";

export class MovimientosClase {
    getMovimientosIntervalo(inicioTime: number, finalTime: number): Promise<MovimientosInterface[]> {
        return schMovimientos.getMovimientosIntervalo(inicioTime, finalTime);
    }
}
