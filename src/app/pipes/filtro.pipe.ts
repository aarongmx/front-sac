import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
    //value es toda la data
    transform(value: any, args1: any): any {
        //args1 es lo que recibimos del input
        if (args1 === '' || args1.length < 2) return value;
        const resultado = [];
        for (const busca of value) { //recorremos toda la data
            if (busca.nombre.toLowerCase().indexOf(args1.toLowerCase()) > -1 || busca.apellidos.toLowerCase().indexOf(args1.toLowerCase()) > -1 || busca.nc.indexOf(args1) > -1) {
                resultado.push(busca);
            }
        }
        return resultado;
    }
}
