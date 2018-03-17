import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPortitulo } from './foto.pipe'

@NgModule({
    declarations: [ FotoComponent, FiltroPortitulo ],
    exports: [ FotoComponent, FiltroPortitulo]
})
export class FotoModule { }
