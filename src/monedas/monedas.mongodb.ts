import { client } from "../conexion/mongodb";

export async function setMonedas(data) {
    await client.connect();
    const database = client.db('tocgame');
    const monedas = database.collection('monedas');
    const resultado = await monedas.replaceOne({ _id: "INFO_MONEDAS" }, data, {upsert: true});
    client.close();
    return resultado;
}