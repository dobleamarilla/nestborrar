// 100%
import { tocGame } from "src/toc";
import { socket } from "../conexion/socket";
import { TrabajadoresInterface } from "./trabajadores.interface";
import * as schTrabajadores from "./trabajadores.mongodb";

export class TrabajadoresClase {

    actualizarTrabajadores() {
        tocGame.setStopNecesario(true);
        const params = tocGame.parametros.getParametros();
        socket.emit('descargar-trabajadores', { licencia: params.licencia, database: params.database, codigoTienda: params.codigoTienda});
    }

    getCurrentIdTrabajador() {
        return schTrabajadores.getCurrentIdTrabajador().then((resultado) => {
            if (resultado != null) {
                return resultado.idCurrentTrabajador;
            } else {
                return null;
            }
        }).catch((err) => {
            console.log(err);
            return null;
        });;
    }

    getCurrentTrabajador(): Promise<TrabajadoresInterface> {
        return this.getCurrentIdTrabajador().then((idCurrentTrabajador) => {
            if (idCurrentTrabajador != null) {
                return this.getTrabajador(idCurrentTrabajador);
            } else {
                return null;
            }
        }).catch((err) => {
            console.log(err);
            return null;
        });
    }

    setCurrentTrabajador(idTrabajador: number): Promise<boolean> {
        return schTrabajadores.setCurrentIdTrabajador(idTrabajador).then((res) => {
            if (res.acknowledged) {
                tocGame.parametros.actualizarParametros();
                return true;
            } else {
                return false;
            };
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    getTrabajadoresFichados() {
        return schTrabajadores.getTrabajadoresFichados();
    }

    getTrabajador(idTrabajador: number): Promise<TrabajadoresInterface> {
        return schTrabajadores.getTrabajador(idTrabajador);
    }

    ficharTrabajador(idTrabajador: number): Promise<boolean> {
        return schTrabajadores.ficharTrabajador(idTrabajador).then((res) => {
            if (res.acknowledged) {
                return this.nuevoFichajesSincro("ENTRADA", idTrabajador).then((res2) => {
                    if (res2.acknowledged) {
                        return true;
                    } else {
                        return false;
                    }
                }).catch((err) => {
                    console.log(err);
                    return false;
                });
            } else {
                return false;
            }
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    desficharTrabajador(idTrabajador: number): Promise<boolean> {
        return schTrabajadores.ficharTrabajador(idTrabajador).then((res) => {
            if (res.acknowledged) {
                return this.nuevoFichajesSincro("SALIDA", idTrabajador).then((res2) => {
                    if (res2.acknowledged) {
                        return true;
                    } else {
                        return false;
                    }
                }).catch((err) => {
                    console.log(err);
                    return false;
                });
            } else {
                return false;
            }
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    nuevoFichajesSincro(tipo: "ENTRADA" | "SALIDA", idTrabajador: number) {
        const auxTime = new Date();
        const objGuardar = {
            _id: Date.now(),
            infoFichaje: {
                idTrabajador: idTrabajador,
                fecha: {
                    year: auxTime.getFullYear(),
                    month: auxTime.getMonth(),
                    day: auxTime.getDate(),
                    hours: auxTime.getHours(),
                    minutes: auxTime.getMinutes(),
                    seconds: auxTime.getSeconds()
                }
            },
            tipo: tipo
        };
        return schTrabajadores.insertNuevoFichaje(objGuardar);
    }
}

export const trabajadoresInstance = new TrabajadoresClase();
