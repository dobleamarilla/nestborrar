import * as schClientes from './clientes.mongodb';
import { ClientesInterface } from './clientes.interface';

export class Clientes {
    /* Busca tanto nombres como tarjeta cliente */
    buscar(cadena: string) {
        return schClientes.buscar(cadena).then((res: ClientesInterface[]) => {
            if (res.length > 0) {
                return res;
            } else {
                return [];
            }
        }).catch((err) => {
            console.log(err);
            return [];
        });
    }
}
export const clienteInstance = new Clientes();
