import { client } from "../conexion/mongodb";
import { CajaForSincroInterface, CajaInterface } from "./caja-interface.interface";

export async function getInfoCaja(): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const caja = database.collection('cajas');
    const resultado = await caja.findOne({_id: "CAJA"});
    client.close();
    return resultado;
}

export async function setInfoCaja(data: CajaInterface) {
    await client.connect();
    const database = client.db('tocgame');
    const caja = database.collection('cajas');
    const resultado = await caja.replaceOne({
        _id: "CAJA"
    },
    data,
    {upsert: true});
    client.close();
    return resultado;
}

export async function nuevoItemSincroCajas(caja: CajaForSincroInterface) {
    await client.connect();
    const database = client.db('tocgame');
    const caja = database.collection('cajas');
    const resultado = await caja.replaceOne({
        _id: "CAJA"
    },
    data,
    {upsert: true});
    client.close();
    return resultado;
}