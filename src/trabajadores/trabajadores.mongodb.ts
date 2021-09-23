import { client } from "../conexion/mongodb";

export async function getCurrentIdTrabajador() {
    await client.connect();
    const database = client.db('tocgame');
    const parametros = database.collection('Parametros');
    const resultado = await parametros.findOne({_id: "PARAMETROS"});
    client.close();
    return resultado;
}

export async function getTrabajador(idTrabajador: number): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = await trabajadores.findOne({_id: idTrabajador}); //_id y idTrabajador siempre son iguales (duplicados)
    client.close();
    return resultado;
}

export async function setCurrentIdTrabajador(idTrabajador: number) {
    await client.connect();
    const database = client.db('tocgame');
    const parametros = database.collection('Parametros');
    const resultado = await parametros.updateOne({_id: "PARAMETROS"}, {idCurrentTrabajador: idTrabajador});
    client.close();
    return resultado;
}

export async function getTrabajadoresFichados() {
    await client.connect();
    const database = client.db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = (await trabajadores.find({fichado: true})).toArray();
    client.close();
    return resultado;
}

export async function ficharTrabajador(idTrabajador: number) {
    await client.connect();
    const database = client.db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = trabajadores.updateOne({_id: idTrabajador}, {fichado: true});
    client.close();
    return resultado;
}
export async function desficharTrabajador(idTrabajador: number) {
    await client.connect();
    const database = client.db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = trabajadores.updateOne({_id: idTrabajador}, {fichado: false});
    client.close();
    return resultado;
}

export async function insertNuevoFichaje(data) {
    await client.connect();
    const database = client.db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = trabajadores.insertOne(data);
    client.close();
    return resultado;
}