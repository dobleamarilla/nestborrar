import { client } from "../conexion/mongodb";
import { TicketsInterface } from "./tickets.interface";

export async function getTicketsIntervalo(inicioTime: number, finalTime: number): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const tickets = database.collection('tickets');
    const resultado = await (await tickets.find({timestamp: {$lte: finalTime, $gte: inicioTime}})).toArray();
    client.close();
    return resultado;
}

export async function getDedudaDeliveroo(inicioTime: number, finalTime: number) {
    await client.connect();
    const database = client.db('tocgame');
    const tickets = database.collection('tickets');
    const resultado = await tickets.find({
        $and: [
            {cliente: "CliBoti_000_{3F7EF049-80E2-4935-9366-0DB6DED30B67}"},
            {timestamp: {$gte: inicioTime}},
            {timestamp: {$lte: finalTime}}
        ]
    });
    const arrayResult = await resultado.toArray();
    client.close();
    let suma = 0;
    for (let i = 0; i < arrayResult.length; i++) {
        suma += arrayResult[i].total;
    }
    return suma;
}

export async function getDedudaGlovo(inicioTime: number, finalTime: number) {
    await client.connect();
    const database = client.db('tocgame');
    const tickets = database.collection('tickets');
    const resultado = await tickets.find({
        $and: [
            {cliente: "CliBoti_000_{A83B364B-252F-464B-B0C3-AA89DA258F64}"},
            {timestamp: {$gte: inicioTime}},
            {timestamp: {$lte: finalTime}}
        ]
    });
    const arrayResult = await resultado.toArray();
    client.close();
    let suma = 0;
    for (let i = 0; i < arrayResult.length; i++) {
        suma += arrayResult[i].total;
    }
    return suma;
}

export async function getTotalTkrs(inicioTime: number, finalTime: number) {
    await client.connect();
    const database = client.db('tocgame');
    const tickets = database.collection('tickets');
    const resultado = await tickets.find({
        $and: [
            {tipoPago: "TICKET_RESTAURANT"},
            {timestamp: {$gte: inicioTime}},
            {timestamp: {$lte: finalTime}}
        ]
    });
    const arrayResult = await resultado.toArray();
    client.close();
    let suma = 0;
    for (let i = 0; i < arrayResult.length; i++) {
        suma += arrayResult[i].total;
    }
    return suma;
}

// export async function getDedudaDeliveroo(inicioTime: number, finalTime: number) {
//     await client.connect();
//     const database = client.db('tocgame');
//     const tickets = database.collection('tickets');
//     const resultado = await tickets.aggregate([{$match: {$and: [
//         {cliente: "CliBoti_000_{3F7EF049-80E2-4935-9366-0DB6DED30B67}"},
//         {timestamp: {$gte: inicioTime}},
//         {timestamp: {$lte: finalTime}}
//     ]}}, {$group: {_id: null, suma: {$sum: "$total"}}}]);
//     client.close();

//     return resultado;
// }