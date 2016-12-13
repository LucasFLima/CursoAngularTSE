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
var pais_1 = require("../class/pais");
var pais_service_1 = require("../service/pais.service");
var PaisComponent = (function () {
    function PaisComponent(paisService) {
        this.paisService = paisService;
        this.paisObject = new pais_1.Pais();
        this.edit = false;
    }
    // Chamada ao serviço com mock
    // getListPaiss(): void{
    //     this.paisService.getListPais().then(paiss => this.paiss = paiss);
    // }
    PaisComponent.prototype.getListPaiss = function () {
        var _this = this;
        this.paisService.getListPais()
            .subscribe(function (paiss) { return _this.paiss = paiss; }, function (error) { return _this.errorMessage = error; });
    };
    //delete com chamada a serviço
    PaisComponent.prototype.deletarPais = function (id, i) {
        var _this = this;
        //this.paisDel = id;
        this.paisDel = this.paiss[i].nome;
        alert("Exclusão da pais: " + this.paisDel);
        this.i = i;
        this.paisService.deletarPais(id)
            .subscribe(function (success) { return _this.paiss.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    // salvar usuário apenas com a exclusão da lista local 
    //salvarPais(pais): void {
    //    this.paiss.push(pais);
    //    this.paisObject = new Pais();
    //}
    // salvar usuário com chamada ao serviço
    PaisComponent.prototype.salvarPais = function (pais) {
        var _this = this;
        if (!pais.nome) {
            return;
        }
        this.paisService.salvarPais(pais)
            .subscribe(function (pais) { return _this.popularLista(pais); }, function (error) { return _this.errorMessage = error; });
    };
    PaisComponent.prototype.popularLista = function (pais) {
        this.paiss.push(pais);
        this.paisObject = new pais_1.Pais();
    };
    // editar usuário apenas modificando a lista lo    cal
    //    editarPais(pais, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.paisObject = usuar    io;
    //        if (persisti    r){
    //            this.paisObject = new Pais    ();
    //            this.edit = fal    se;
    //            }
    //    }
    PaisComponent.prototype.editarPais = function (pais, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.paisObject = pais;
        if (persistir) {
            if (!pais.nome) {
                return;
            }
            this.paisService.salvarPais(pais)
                .subscribe(function (pais) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
        //alert(pais.nome);
    };
    PaisComponent.prototype.atualizarFormulario = function () {
        this.paisObject = new pais_1.Pais();
        this.edit = false;
    };
    PaisComponent.prototype.ngOnInit = function () {
        this.getListPaiss();
    };
    return PaisComponent;
}());
PaisComponent = __decorate([
    core_1.Component({
        selector: 'pais',
        templateUrl: 'app/pais/templates/pais.template.html',
        providers: [pais_service_1.PaisService]
    }),
    __metadata("design:paramtypes", [pais_service_1.PaisService])
], PaisComponent);
exports.PaisComponent = PaisComponent;
//# sourceMappingURL=pais.component.js.map