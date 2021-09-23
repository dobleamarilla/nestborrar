import { trabajadoresInstance } from "../trabajadores/trabajadores-clase";
import { TrabajadoresInterface } from "src/trabajadores/trabajadores.interface";
import { FichajesInterface } from "./fichajes.interface";
import * as schFichajes from "../schemas/sincroFichajes";

export class FichajesClase {
    hayFichados() {
        trabajadoresInstance.getTrabajadoresFichados().then((arrayTrabajadoresFichados) => {
            if (arrayTrabajadoresFichados != null) {
                if(arrayTrabajadoresFichados.length > 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        });
    }

    addFichado(trabajador: TrabajadoresInterface): Promise<boolean> {
        return trabajadoresInstance.ficharTrabajador(trabajador._id).then((fichajeOK) => {
            if (fichajeOK) {
                // Nuevo fichaje, establece el nuevo trabajador activo
                trabajadoresInstance.setCurrentTrabajador(trabajador._id).then((ok) => {
                    if (ok) {                        
                        const auxTime = new Date();
                        const nuevoFichaje: FichajesInterface = {
                            _id: Date.now(),
                            infoFichaje: {
                                idTrabajador: trabajador._id,
                                fecha: {
                                    year: auxTime.getFullYear(),
                                    month: auxTime.getMonth(),
                                    day: auxTime.getDate(),
                                    hours: auxTime.getHours(),
                                    minutes: auxTime.getMinutes(),
                                    seconds: auxTime.getSeconds()
                                }
                            },
                            tipo: "ENTRADA",
                            enviado: false,
                            enTransito: false
                        };

                        this.pushNuevoFichajeGdt(nuevoFichaje).then((fichajeGdt) => {
                            if (fichajeGdt) {
                                return true;
                            } else {
                                return false;
                            }
                        });
                    } else {
                        console.log("No se puede continuar 2");
                        return false;
                    }
                }).catch((err) => {
                    console.log(err);
                    return false;
                });
            } else {
                console.log("No se puede continuar");
                return false;
            }
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    /* Los fichajes pueden ser ENTRADA y SALIDA */
    pushNuevoFichajeGdt(trabajador: FichajesInterface): Promise<boolean> {
        return schFichajes.nuevoItem(trabajador).then(() => {
            return true;
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }

    async delFichado(idTrabajador: number): Promise<boolean> {
        const trabajadorADesfichar = await trabajadoresInstance.getTrabajador(idTrabajador);
        const currentTrabajador = await trabajadoresInstance.getCurrentTrabajador();
        if (currentTrabajador.idTrabajador == idTrabajador) {
            // Es el mismo, hay que buscar otro current o dejarlo
            const arrayFichados = await trabajadoresInstance.getTrabajadoresFichados();
            if (arrayFichados.length > 0) {
                if (trabajadoresInstance.setCurrentTrabajador(arrayFichados[0].idTrabajador)) {
                    if (trabajadoresInstance.desficharTrabajador(idTrabajador)) {
                        const auxTime = new Date();
                        const nuevoFichaje: FichajesInterface = {
                            _id: Date.now(),
                            infoFichaje: {
                                idTrabajador: trabajadorADesfichar.idTrabajador,
                                fecha: {
                                    year: auxTime.getFullYear(),
                                    month: auxTime.getMonth(),
                                    day: auxTime.getDate(),
                                    hours: auxTime.getHours(),
                                    minutes: auxTime.getMinutes(),
                                    seconds: auxTime.getSeconds()
                                }
                            },
                            tipo: "SALIDA",
                            enviado: false,
                            enTransito: false
                        };
                        if (this.pushNuevoFichajeGdt(nuevoFichaje)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }

        } else {
            // Desfichar y ya está
            trabajadoresInstance.desficharTrabajador(idTrabajador).then((desfichado) => {
                if (desfichado) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }
} }
