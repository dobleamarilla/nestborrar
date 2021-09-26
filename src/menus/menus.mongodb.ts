import { conexion } from "../conexion/mongodb";

export async function getPromociones(): Promise<any> {
    const database = (await conexion).db('tocgame');
    const menus = database.collection('menus');
    const resultado = await (await menus.find()).toArray();
    
    return resultado;
}
