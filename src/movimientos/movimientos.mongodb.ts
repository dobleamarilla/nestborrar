import { client } from "../conexion/mongodb";

export async function getMovimientosIntervalo(inicioTime: number, finalTime: number): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const movimientos = database.collection('movimientos');
    const resultado = await (await movimientos.find({_id: {$lte: finalTime, $gte: inicioTime}})).toArray();
    client.close();
    return resultado;
}
