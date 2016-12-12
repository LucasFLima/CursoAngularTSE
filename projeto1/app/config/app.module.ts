import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//passo 2 (importar o componente criado)
import { AppComponent } from './app.component';

//importar o componente de usuário
import { UsuarioComponent } from '../usuario/components/usuario.component';

//importar o componente de usuário
import { PerfilComponent } from '../perfil/components/perfil.component';

//importar o componente de aluno
import { AlunoComponent } from '../aluno/components/aluno.component';

//importar o componente de escola
import { EscolaComponent } from '../escola/components/escola.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //Adicionar essa linha
    declarations: [AppComponent, UsuarioComponent, PerfilComponent, AlunoComponent, EscolaComponent],
    //Adicionar essa linha
    bootstrap: [AppComponent]
})
export class AppModule { }
