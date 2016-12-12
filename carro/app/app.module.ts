import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//passo 2 (importar o componente criado)
import { AppComponent }   from './app.component';

//importar o componente de usuário
import { CarroComponent } from './carro.component';

//importar o componente de usuário
//import { PerfilComponent } from './perfil.component';

//importar o componente de aluno
//import { AlunoComponent } from './aluno.component';


@NgModule({
    imports: [BrowserModule, FormsModule ], 
  //Adicionar essa linha
  declarations: [AppComponent, CarroComponent ],
  //Adicionar essa linha
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
