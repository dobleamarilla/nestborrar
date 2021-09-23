import { client } from "../conexion/mongodb";
import { ParametrosInterface } from "./parametros.interface";

export async function getParametros() {
    await client.connect();
    const database = client.db('tocgame');
    const parametros = database.collection('Parametros');
    const resultado = await parametros.findOne({_id: "PARAMETROS"});
    client.close();
    return resultado;
}

export async function setParametros(params: ParametrosInterface) {
    await client.connect();
    const database = client.db('tocgame');
    const parametros = database.collection('Parametros');
    const resultado = await parametros.updateOne({_id: "PARAMETROS"}, params);
    client.close();
    return resultado;
}