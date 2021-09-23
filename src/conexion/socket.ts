const io = require('socket.io')({
    serveClient: false
});
import { tocGame } from "../toc";

// const parametros = await tocGame.parametros.getParametros();
// let tipoEntorno = '';

// // if(process.argv[2] == 'test') {
// //     tipoEntorno = 'http://localhost:8080'
// // } else {
// //     tipoEntorno = 'http://54.74.52.150:8080';
// // }

// tipoEntorno = "https://sanpedroserver.com";

// export const socket = (parametros == null || typeof parametros.token === 'undefined') ? io.connect(tipoEntorno) : (io.connect(tipoEntorno, {query: `token=${parametros.token}`}));

class TocSockets {
    private socket: any;
    constructor() {
        tocGame.parametros.getParametros().then((parametros) => {
            let tipoEntorno = "https://sanpedroserver.com";
            if (tipoEntorno == "https://sanpedroserver.com") {
                this.socket = (parametros == null || typeof parametros.token === 'undefined') ? io.connect(tipoEntorno) : (io.connect(tipoEntorno, {query: `token=${parametros.token}`}));
            } else {
                this.socket = null;
            }
        });
    }

    emit(canal: string, data: any = null) {
        (data == null) ? (socket.emit(canal)) : (socket.emit(canal, data));
    }
}

export const socket = new TocSockets();