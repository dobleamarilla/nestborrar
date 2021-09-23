export interface FichajesInterface {
    _id: number,
    infoFichaje: {
        idTrabajador: number,
        fecha: {
            year: number,
            month: number,
            day: number,
            hours: number,
            minutes: number,
            seconds: number
        }
    },
    tipo: string,
    enviado: boolean,
    enTransito: boolean
}
