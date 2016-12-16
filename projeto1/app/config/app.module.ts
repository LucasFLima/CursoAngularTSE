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

//importar o componente de tecnologia
import { TecnologiaComponent } from '../tecnologia/components/tecnologia.component';

//importar o componente de situacao
import { SituacaoComponent } from '../situacao/components/situacao.component';

//importar o componente de pais
import { PaisComponent } from '../pais/components/pais.component';
//importar o componente de clima
import { ClimaComponent } from '../clima/components/clima.component';

import { HomeComponent } from '../home/components/home.component';

import { routing } from './routes/routes';

import { PerfilComponentForm } from '../perfil/components/perfil.component.form';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    
    //Adicionar essa linha
    declarations: [
        AppComponent, 
        UsuarioComponent, 
        PerfilComponent, 
        AlunoComponent, 
        TecnologiaComponent, 
        SituacaoComponent, 
        PaisComponent, 
        ClimaComponent,
        HomeComponent,
        PerfilComponentForm],
    
    //Adicionar essa linha
    bootstrap: [AppComponent]
})
export class AppModule { }
