import { conexion } from "../conexion/mongodb";

export async function getMovimientosIntervalo(inicioTime: number, finalTime: number): Promise<any> {
    const database = (await conexion).db('tocgame');
    const movimientos = database.collection('movimientos');
    const resultado = await (await movimientos.find({_id: {$lte: finalTime, $gte: inicioTime}})).toArray();
    
    return resultado;
}
