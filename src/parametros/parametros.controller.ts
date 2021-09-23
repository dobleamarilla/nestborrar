import { Controller, Post, Query } from '@nestjs/common';
import { parametros } from "./parametros-clase";
@Controller('parametros')
export class ParametrosController {
    @Post('todoInstalado')
    todoInstalado() {
        return parametros.todoInstalado().then((res) => {
            if (res) {
                return parametros.getParametros().then((parametros) => {
                    return {
                        todoInstalado: true,
                        config: parametros
                    };
                });
            } else {
                return {
                    todoInstalado: false
                }
            }
        });
    }
}
