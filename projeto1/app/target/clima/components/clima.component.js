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
var clima_1 = require("../class/clima");
var clima_service_1 = require("../service/clima.service");
var ClimaComponent = (function () {
    function ClimaComponent(climaService) {
        this.climaService = climaService;
        this.climaObject = new clima_1.Clima();
        this.edit = false;
    }
    // Chamada ao serviço com mock
    // getListClimas(): void{
    //     this.climaService.getListClima().then(climas => this.climas = climas);
    // }
    ClimaComponent.prototype.getListClimas = function () {
        var _this = this;
        this.climaService.getListClima()
            .subscribe(function (climas) { return _this.climas = climas; }, function (error) { return _this.errorMessage = error; });
    };
    //delete com chamada a serviço
    ClimaComponent.prototype.deletarClima = function (id, i) {
        var _this = this;
        //this.climaDel = id;
        this.climaDel = this.climas[i].nome;
        alert("Exclusão da clima: " + this.climaDel);
        this.i = i;
        this.climaService.deletarClima(id)
            .subscribe(function (success) { return _this.climas.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    // salvar usuário apenas com a exclusão da lista local 
    //salvarClima(clima): void {
    //    this.climas.push(clima);
    //    this.climaObject = new Clima();
    //}
    // salvar usuário com chamada ao serviço
    ClimaComponent.prototype.salvarClima = function (clima) {
        var _this = this;
        if (!clima.nome) {
            return;
        }
        this.climaService.salvarClima(clima)
            .subscribe(function (clima) { return _this.popularLista(clima); }, function (error) { return _this.errorMessage = error; });
    };
    ClimaComponent.prototype.popularLista = function (clima) {
        this.climas.push(clima);
        this.climaObject = new clima_1.Clima();
    };
    // editar usuário apenas modificando a lista lo    cal
    //    editarClima(clima, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.climaObject = usuar    io;
    //        if (persisti    r){
    //            this.climaObject = new Clima    ();
    //            this.edit = fal    se;
    //            }
    //    }
    ClimaComponent.prototype.editarClima = function (clima, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.climaObject = clima;
        if (persistir) {
            if (!clima.nome) {
                return;
            }
            this.climaService.salvarClima(clima)
                .subscribe(function (clima) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
        //alert(clima.nome);
    };
    ClimaComponent.prototype.atualizarFormulario = function () {
        this.climaObject = new clima_1.Clima();
        this.edit = false;
    };
    ClimaComponent.prototype.ngOnInit = function () {
        this.getListClimas();
    };
    return ClimaComponent;
}());
ClimaComponent = __decorate([
    core_1.Component({
        selector: 'clima',
        templateUrl: 'app/clima/templates/clima.template.html',
        providers: [clima_service_1.ClimaService]
    }),
    __metadata("design:paramtypes", [clima_service_1.ClimaService])
], ClimaComponent);
exports.ClimaComponent = ClimaComponent;
//# sourceMappingURL=clima.component.js.map