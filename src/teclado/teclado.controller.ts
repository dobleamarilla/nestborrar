import { Controller, Post, Body } from '@nestjs/common';
import { cestas } from '../cestas/cestas-clase';

@Controller('teclado')
export class TecladoController {
    @Post('clickTeclaArticulo')
    clickTecla(@Body() params) {
        return cestas.addItem(params.idArticulo, params.idBoton, params.peso, params.infoPeso).then((res) => {
            return {
                error: false,
                bloqueado: false,
                cesta: res
            };
        }).catch((err) => {
            return {
                error: true,
                mensaje: "Error en addItem"
            };
        });
    }
}
