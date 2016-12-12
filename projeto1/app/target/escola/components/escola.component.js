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
var escola_1 = require("../class/escola");
var escola_service_1 = require("../service/escola.service");
var EscolaComponent = (function () {
    function EscolaComponent(escolaService) {
        this.escolaService = escolaService;
        this.escolaObject = new escola_1.Escola();
        this.edit = false;
    }
    // Chamada ao serviço com mock
    // getListEscolas(): void{
    //     this.escolaService.getListEscola().then(escolas => this.escolas = escolas);
    // }
    EscolaComponent.prototype.getListEscolas = function () {
        var _this = this;
        this.escolaService.getListEscola()
            .subscribe(function (escolas) { return _this.escolas = escolas; }, function (error) { return _this.errorMessage = error; });
    };
    //delete com chamada a serviço
    EscolaComponent.prototype.deletarEscola = function (id, i) {
        var _this = this;
        //this.escolaDel = id;
        this.escolaDel = this.escolas[i].nome;
        alert("Exclusão da escola: " + this.escolaDel);
        this.i = i;
        this.escolaService.deletarEscola(id)
            .subscribe(function (success) { return _this.escolas.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    // salvar usuário apenas com a exclusão da lista local 
    //salvarEscola(escola): void {
    //    this.escolas.push(escola);
    //    this.escolaObject = new Escola();
    //}
    // salvar usuário com chamada ao serviço
    EscolaComponent.prototype.salvarEscola = function (escola) {
        var _this = this;
        if (!escola.nome) {
            return;
        }
        this.escolaService.salvarEscola(escola)
            .subscribe(function (escola) { return _this.popularLista(escola); }, function (error) { return _this.errorMessage = error; });
    };
    EscolaComponent.prototype.popularLista = function (escola) {
        this.escolas.push(escola);
        this.escolaObject = new escola_1.Escola();
    };
    // editar usuário apenas modificando a lista lo    cal
    //    editarEscola(escola, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.escolaObject = usuar    io;
    //        if (persisti    r){
    //            this.escolaObject = new Escola    ();
    //            this.edit = fal    se;
    //            }
    //    }
    EscolaComponent.prototype.editarEscola = function (escola, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.escolaObject = escola;
        if (persistir) {
            if (!escola.nome) {
                return;
            }
            this.escolaService.salvarEscola(escola)
                .subscribe(function (escola) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
        //alert(escola.nome);
    };
    EscolaComponent.prototype.atualizarFormulario = function () {
        this.escolaObject = new escola_1.Escola();
        this.edit = false;
    };
    EscolaComponent.prototype.ngOnInit = function () {
        this.getListEscolas();
    };
    return EscolaComponent;
}());
EscolaComponent = __decorate([
    core_1.Component({
        selector: 'escola',
        templateUrl: 'app/escola/templates/escola.template.html',
        providers: [escola_service_1.EscolaService]
    }),
    __metadata("design:paramtypes", [escola_service_1.EscolaService])
], EscolaComponent);
exports.EscolaComponent = EscolaComponent;
//# sourceMappingURL=escola.component.js.map