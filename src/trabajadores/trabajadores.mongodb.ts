import { conexion } from "../conexion/mongodb";
import { SincroFichajesInterface } from "./trabajadores.interface";

export async function getCurrentIdTrabajador() {
    const database = (await conexion).db('tocgame');
    const parametros = database.collection('Parametros');
    const resultado = await parametros.findOne({_id: "PARAMETROS"});
    
    return resultado;
}

export async function getTrabajador(idTrabajador: number): Promise<any> {
    const database = (await conexion).db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = await trabajadores.findOne({_id: idTrabajador}); //_id y idTrabajador siempre son iguales (duplicados)
    
    return resultado;
}

export async function setCurrentIdTrabajador(idTrabajador: number) {
    const database = (await conexion).db('tocgame');
    const parametros = database.collection('Parametros');
    const resultado = await parametros.updateOne({_id: "PARAMETROS"}, {idCurrentTrabajador: idTrabajador});
    
    return resultado;
}

export async function getTrabajadoresFichados() {
    const database = (await conexion).db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = (await trabajadores.find({fichado: true})).toArray();
    
    return resultado;
}

export async function ficharTrabajador(idTrabajador: number) {
    const database = (await conexion).db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = trabajadores.updateOne({_id: idTrabajador}, {fichado: true});
    
    return resultado;
}
export async function desficharTrabajador(idTrabajador: number) {
    const database = (await conexion).db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = trabajadores.updateOne({_id: idTrabajador}, {fichado: false});
    
    return resultado;
}

export async function insertNuevoFichaje(data) {
    const database = (await conexion).db('tocgame');
    const sincrofichajes = database.collection('sincro-fichajes');
    const resultado = sincrofichajes.insertOne(data);
    
    return resultado;
}

export async function buscarTrabajadoresFichados(): Promise<any> {
    const database = (await conexion).db('tocgame');
    const trabajadores = database.collection('trabajadores');
    const resultado = await (await trabajadores.find({fichado: true})).toArray();
    
    return resultado;
}

