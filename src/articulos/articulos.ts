import * as schArticulos from "./articulos.mongodb";

export class Articulos {
    private estadoTarifaVIP: boolean;
    constructor() {
        this.estadoTarifaVIP = false;
    }

    setEstadoTarifaEspecial(payload: boolean) {
        this.estadoTarifaVIP = payload;
    }

    getEstadoTarifaEspecial() {
        return this.estadoTarifaVIP;
    }

    /* Devuelve un articulo */
    async getInfoArticulo(idArticulo: number) {
        if(!this.getEstadoTarifaEspecial()) {
            return await schArticulos.getInfoArticulo(idArticulo);
        } else {
            return await schArticulos.getInfoArticuloTarifaEspecial(idArticulo);
        }
    }
}
const articulosInstance = new Articulos();
export { articulosInstance };