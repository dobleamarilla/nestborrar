import { Module } from '@nestjs/common';
import { ArticulosController } from './articulos/articulos.controller';
import { TeclasMenusController } from './teclas-menus/teclas-menus.controller';
import { TecladoController } from './teclado/teclado.controller';
import { CestasController } from './cestas/cestas.controller';
import { ParametrosController } from './parametros/parametros.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TicketsController } from './tickets/tickets.controller';
import { TrabajadoresController } from './trabajadores/trabajadores.controller';
import { FichajesController } from './fichajes/fichajes.controller';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    })
  ],
  controllers: [ArticulosController, TeclasMenusController, TecladoController, CestasController, ParametrosController, TicketsController, TrabajadoresController, FichajesController],
  providers: [],
})
export class AppModule {}
