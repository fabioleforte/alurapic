import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import 'rxjs/add/operator/map';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';



@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        FormsModule,
        HttpModule,
        PainelModule,
        routing
    ],
    declarations: [
        AppComponent, 
        CadastroComponent, 
        ListagemComponent
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }

