import { Controller, Post, Query, Body } from '@nestjs/common';
import { teclasMenus } from './teclas-menus';

@Controller('teclas-menus')
export class TeclasMenusController {
    @Post('clickMenu')
    clickMenu(@Body() params) {
        if (teclasMenus.getStopNecesario() == false) {
            return teclasMenus.clickMenu(params.nombreMenu).then((res) => {
                return {
                    bloqueado: false,
                    resultado: res
                };
            }).catch((err) => {
                return {
                    bloqueado: false,
                    error: err
                }
            });
        } else {
            return {
                bloqueado: true
            }
        }
    }

    @Post('getMenus')
    getMenus() {
        return teclasMenus.getMenus().then((resultado) => {
            if(teclasMenus.getStopNecesario() == false) {
                return {bloqueado: false, resultado: resultado};
            }
            else {
                return {bloqueado: true};
            }        
        });
    }
}
