import { client } from "../conexion/mongodb";
import { CestasInterface } from "./cestas.interface";

export async function getUnaCesta(): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const cesta = database.collection('cestas');
    const resultado = await cesta.findOne();
    client.close();
    return resultado;
}

export async function getCestaConcreta(idCesta: number): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const cesta = database.collection('cestas');
    const resultado = await cesta.findOne({_id: idCesta});
    client.close();
    return resultado;
}

export async function getAllCestas(): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const cesta = database.collection('cestas');
    const resultado = await (await cesta.find()).toArray();
    client.close();
    return resultado;
}

export async function borrarCesta(idCesta: number) {
    await client.connect();
    const database = client.db('tocgame');
    const cesta = database.collection('cestas');
    const resultado = await cesta.deleteOne({_id: idCesta});
    client.close();
    return resultado;
}

export async function setCesta(cesta: CestasInterface) {
    await client.connect();
    const database = client.db('tocgame');
    const unaCesta = database.collection('cestas');
    const resultado = await unaCesta.replaceOne({_id: cesta._id}, {
        tiposIva: cesta.tiposIva,
        lista: cesta.lista
    });
    client.close();
    return resultado;
}
