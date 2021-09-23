import * as schTeclas from "../schemas/teclas";
import * as schMenus from "../schemas/menus";

export class TeclasMenusClase {
    private stopNecesario: boolean;

    constructor() {
        this.stopNecesario = false;
    }

    clickMenu(nombreMenu: string) {
        return schTeclas.getTecladoMain(nombreMenu);
    }
    getStopNecesario() {
        return this.stopNecesario;
    }
    getMenus() {
        return schMenus.getMenus();
    }
}