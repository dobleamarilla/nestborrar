import { Module } from '@nestjs/common';
import { ArticulosController } from './articulos/articulos.controller';
// import { TeclasMenusController } from './menus/menus.controller';
import { TecladoController } from './teclado/teclado.controller';
import { CestasController } from './cestas/cestas.controller';
import { ParametrosController } from './parametros/parametros.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TicketsController } from './tickets/tickets.controller';
import { TrabajadoresController } from './trabajadores/trabajadores.controller';
import { MenusController } from './menus/menus.controller'; // 100%
import { CajaController } from './caja/caja.controller';
import { ClientesController } from './clientes/clientes.controller';
import { ImpresoraController } from './impresora/impresora.controller';
import { SocketGateway } from './sockets.gateway';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    })
  ],
  controllers: [
    ArticulosController, 
    MenusController,
    TecladoController, 
    CestasController, 
    ParametrosController, 
    TicketsController, 
    TrabajadoresController, CajaController, ClientesController, ImpresoraController],
  providers: [SocketGateway]  
})
export class AppModule {}
