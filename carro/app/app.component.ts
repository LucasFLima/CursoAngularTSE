import { Component } from '@angular/core';
//import { Usuario } from './usuario';
//import { usuarioImpl } from './usuario.implement';
//import { UsuarioInterface } from './usuario.interface';

//const USUARIOS: Usuario[] = [
//  { id: 11, nome: 'João', idade:20  },
//  { id: 12, nome: 'Maria', idade:24 },
//  { id: 13, nome: 'Joana', idade:29 },
//  { id: 14, nome: 'José', idade:60  },
//  { id: 15, nome: 'Magneta', idade:89 },
//  { id: 16, nome: 'RubberMan', idade:21 },
//  { id: 17, nome: 'Dynama' , idade:29 },
//  { id: 18, nome: 'Dr IQ', idade:26 },
//  { id: 19, nome: 'Nataniel', idade:25 },
//  { id: 20, nome: 'Jéssica', idade:23 },
//  { id: 21, nome: 'Lucas', idade:35 }
//];

@Component({
    selector: 'projetoCarro',
    
    //template do projeto 1
    //  template: '<h1>Meu primeiro projeto em AngularJS!</h1>'
    
    //template do projet 2
    //    template: `<h2>Listagem de usuários</h2>
    //                <table class="table table-hover table-striped">
    //                   <tr>
    //                      <th>
    //                          Id
    //                      </th>
    //                      <th>
    //                          Nome
    //                      </th>
    //                      <th>
    //                          Idade
    //                      </th>
    //                   </tr>
    //                   <tr *ngFor="let usuario of usuarios">
    //                      <th>
    //                          {{usuario.id}}
    //                      </th>
    //                      <th>
    //                          {{usuario.nome}}
    //                      </th>
    //                      <th>
    //                          {{usuario.idade}}
    //                      </th>
    //                   </tr>
    //                </table>
    //            `
    
    //template com importação de arquivo externo
    templateUrl: 'app/template.html'
    
})
export class AppComponent // implements UsuarioInterface
    {
    // usuarios = USUARIOS;



    // implementação do método de listar usuários
//    usuarios = this.listar();
//        listar(): Usuario[] {
//            return [
//                { id: 11, nome: 'João', idade: 20 },
//                { id: 12, nome: 'Maria', idade: 24 },
//                { id: 13, nome: 'Joana', idade: 29 },
//                { id: 14, nome: 'José', idade: 60 },
//                { id: 15, nome: 'Magneta', idade: 89 },
//                { id: 16, nome: 'RubberMan', idade: 21 },
//                { id: 17, nome: 'Dynama', idade: 29 },
//                { id: 18, nome: 'Dr IQ', idade: 26 },
//                { id: 19, nome: 'Nataniel', idade: 25 },
//                { id: 20, nome: 'Jéssica', idade: 23 },
//                { id: 21, nome: 'Lucas Lima', idade: 35 }
//            ]
//        }

    // utilizando usuario implementacao
    // usuarios = usuarioImpl.listar();

}
