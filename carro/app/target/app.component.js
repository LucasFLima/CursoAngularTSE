"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
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
var AppComponent // implements UsuarioInterface
 = (function () {
    function AppComponent // implements UsuarioInterface
        () {
    }
    AppComponent // implements UsuarioInterface
     = __decorate([
        core_1.Component({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent // implements UsuarioInterface
    );
    return AppComponent // implements UsuarioInterface
    ;
}());
exports.AppComponent // implements UsuarioInterface
 = AppComponent // implements UsuarioInterface
;
//# sourceMappingURL=app.component.js.map