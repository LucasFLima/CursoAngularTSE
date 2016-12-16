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
var core_1 = require("@angular/core");
var perfil_service_1 = require("../service/perfil.service");
var PerfilComponent = (function () {
    //perfilObject = new Perfil();
    function PerfilComponent(perfilService) {
        this.perfilService = perfilService;
    }
    PerfilComponent.prototype.getList = function () {
        var _this = this;
        this.perfilService.fetchAll()
            .subscribe(function (perfis) { return _this.perfis = perfis; }, function (error) { return _this.errorMessage = error; });
    };
    PerfilComponent.prototype.deletar = function (id, i) {
        var _this = this;
        this.i = i;
        this.perfilService.deletar(id)
            .subscribe(function (success) { return _this.perfis.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    PerfilComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    core_1.Component({
        selector: 'perfil',
        templateUrl: 'app/perfil/templates/perfil.template.html',
        providers: [perfil_service_1.PerfilService]
    }),
    __metadata("design:paramtypes", [perfil_service_1.PerfilService])
], PerfilComponent);
exports.PerfilComponent = PerfilComponent;
// // versão com implentação local da lista de perfis
////import { Component, OnInit } from '@angular/core';
//import { Perfil } from '../class/perfil';
//import { PerfilService } from '../service/perfil.service';
//
//
//@Component({
//    selector: 'perfil',
//    templateUrl: 'app/perfil/templates/perfil.template.html',
//    providers: [PerfilService]
//})
//
//export class PerfilComponent implements OnInit {
////    perfis = [
////                { nome: 'Adminstrador'},
////                { nome: 'Operador'},
////                { nome: 'Consulta'}
////                
////            ];
//    perfis: Perfil[];
//    
//    constructor(private perfilService: PerfilService){ }
//    
//    getListUsuario(): void{
//        this.perfilService.getListPerfis().then(perfis => this.perfis = perfis);
//    }
//    
//    ngOnInit(): void {
//        this.getListUsuario();
//    } 
//    
//    perfilObject = new Perfil();
//    edit = false;
//    
//    deletarPerfil(index): void{
//        this.perfis.splice(index, 1);
//    }
//    
//    salvarPerfil(perfil): void{
//        this.perfis.push(perfil);
//        this.perfilObject = new Perfil();
//    }
//    
//    editarPerfil(perfil, persistir=false): void {
//        this.edit = true;
//        this.perfilObject = perfil;
//        if (persistir){
//            this.perfilObject = new Perfil();
//            this.edit = false;
//        }
//    }
//        
//
//}
//
//# sourceMappingURL=perfil.component.js.map