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
var perfil_1 = require('../class/perfil');
var perfil_service_1 = require('../service/perfil.service');
var PerfilComponent = (function () {
    function PerfilComponent(perfilService) {
        this.perfilService = perfilService;
        this.perfilObject = new perfil_1.Perfil();
        this.edit = false;
    }
    PerfilComponent.prototype.getListUsuario = function () {
        var _this = this;
        this.perfilService.getListPerfis().then(function (perfis) { return _this.perfis = perfis; });
    };
    PerfilComponent.prototype.ngOnInit = function () {
        this.getListUsuario();
    };
    PerfilComponent.prototype.deletarPerfil = function (index) {
        this.perfis.splice(index, 1);
    };
    PerfilComponent.prototype.salvarPerfil = function (perfil) {
        this.perfis.push(perfil);
        this.perfilObject = new perfil_1.Perfil();
    };
    PerfilComponent.prototype.editarPerfil = function (perfil, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.perfilObject = perfil;
        if (persistir) {
            this.perfilObject = new perfil_1.Perfil();
            this.edit = false;
        }
    };
    PerfilComponent = __decorate([
        core_1.Component({
            selector: 'perfil',
            templateUrl: 'app/perfil/templates/perfil.template.html',
            providers: [perfil_service_1.PerfilService]
        }), 
        __metadata('design:paramtypes', [perfil_service_1.PerfilService])
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map