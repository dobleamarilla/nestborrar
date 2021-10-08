import { Controller, Post, Body } from '@nestjs/common';
import { cajaInstance } from './caja.clase';

@Controller('caja')
export class CajaController {
    @Post('cerrarCaja')
    cerrarCaja(@Body() params) {
        cajaInstance.cerrarCaja(
            params.total,
            params.detalle,
            params.infoDinero,
            params.cantidad3G
        );
    }
}
