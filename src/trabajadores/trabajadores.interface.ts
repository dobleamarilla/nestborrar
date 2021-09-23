export interface TrabajadoresInterface {
    _id: number,
    idTrabajador: number,
    nombre: string,
    nombreCorto: string,
    fichado: boolean
}

export const trabajadorVacio = {
    _id: -1,
    idTrabajador: -1,
    nombre: '',
    nombreCorto: '',
    fichado: false
}