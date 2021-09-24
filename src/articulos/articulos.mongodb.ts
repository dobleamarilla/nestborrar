import { client } from "../conexion/mongodb";

export async function getInfoArticulo(idArticulo: number): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const articulos = database.collection('articulos');
    const resultado = await articulos.findOne({_id: idArticulo});
    client.close();
    return resultado;
}

export async function getInfoArticuloTarifaEspecial(idArticulo: number): Promise<any> {
    await client.connect();
    const database = client.db('tocgame');
    const articulos = database.collection('ArticulosTarifaEspecial');
    const resultado = await articulos.findOne({_id: idArticulo});
    client.close();
    return resultado;
}
