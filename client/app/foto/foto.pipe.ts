import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';


@Pipe({
    name: 'filtroPortitulo',

})

export class FiltroPortitulo implements PipeTransform {

    transform(fotos:FotoComponent, digitado:string) {
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}