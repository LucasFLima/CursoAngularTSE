import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
    selector: 'projeto1',
    template: `
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" routerLink="/">Projeto 7</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a routerLink="/">Página inicial</a></li>
                  <li><a routerLink="/usuario">Usuários</a></li>
                  <li><a routerLink="/perfil">Perfis</a></li>
                </ul>
              </div>
            </nav>
            <div class="container">
              <router-outlet></router-outlet>
            </div>
    `
})

export class AppComponent {

}
//
//
////import { Component } from '@angular/core';
//import './rxjs-operators';
//
//
//@Component({
//    selector: 'projeto1',
//    
//    //template com importação de arquivo externo
//    templateUrl: 'app/config/template.html'
//    
//})
//export class AppComponent {
//
//}
