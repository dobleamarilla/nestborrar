import { Articulos } from "./articulos/articulos";
import { CajaClase } from "./caja/caja"
import { CestaClase } from "./cestas/cestas-clase";
import { FichajesClase } from "./fichajes/fichajes-clase";
import { MovimientosClase } from "./movimientos/movimientos-clase";
import { OfertasClase } from "./ofertas/ofertas-clase";
import { ParametrosClase } from "./parametros/parametros-clase";
import { TecladoClase } from "./teclado/teclado-clase";
import { TeclasMenusClase } from "./teclas-menus/teclas-menus";
import { TrabajadoresClase } from "./trabajadores/trabajadores-clase";

export class Toc {
    public articulos: Articulos;
    public caja: CajaClase;
    public cesta: CestaClase;
    public fichajes: FichajesClase;
    public ofertas: OfertasClase;
    public parametros: ParametrosClase;
    public teclado: TecladoClase;
    public menus: TeclasMenusClase;
    public trabajadores: TrabajadoresClase;
    public movimientos: MovimientosClase
    private stopNecesario: boolean;

    constructor() {
        this.articulos = new Articulos();
        this.caja = new CajaClase();
        this.cesta = new CestaClase();
        this.fichajes = new FichajesClase();
        this.ofertas = new OfertasClase();
        this.parametros = new ParametrosClase();
        this.teclado  = new TecladoClase();
        this.menus = new TeclasMenusClase();
        this.trabajadores = new TrabajadoresClase();
        this.movimientos = new MovimientosClase();
        this.stopNecesario = false;
    }

    getStopNecesario(): boolean {
        return this.stopNecesario;
    }

    setStopNecesario(valor: boolean): void {
        this.stopNecesario = valor;
    }
}

export const tocGame = new Toc();
