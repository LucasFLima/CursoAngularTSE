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
var tecnologia_1 = require("../class/tecnologia");
var tecnologia_service_1 = require("../service/tecnologia.service");
var TecnologiaComponent = (function () {
    function TecnologiaComponent(tecnologiaService) {
        this.tecnologiaService = tecnologiaService;
        this.tecnologiaObject = new tecnologia_1.Tecnologia();
        this.edit = false;
    }
    // Chamada ao serviço com mock
    // getListTecnologias(): void{
    //     this.tecnologiaService.getListTecnologia().then(tecnologias => this.tecnologias = tecnologias);
    // }
    TecnologiaComponent.prototype.getListTecnologias = function () {
        var _this = this;
        this.tecnologiaService.getListTecnologia()
            .subscribe(function (tecnologias) { return _this.tecnologias = tecnologias; }, function (error) { return _this.errorMessage = error; });
    };
    //delete com chamada a serviço
    TecnologiaComponent.prototype.deletarTecnologia = function (id, i) {
        var _this = this;
        //this.tecnologiaDel = id;
        this.tecnologiaDel = this.tecnologias[i].nome;
        alert("Exclusão da tecnologia: " + this.tecnologiaDel);
        this.i = i;
        this.tecnologiaService.deletarTecnologia(id)
            .subscribe(function (success) { return _this.tecnologias.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    // salvar usuário apenas com a exclusão da lista local 
    //salvarTecnologia(tecnologia): void {
    //    this.tecnologias.push(tecnologia);
    //    this.tecnologiaObject = new Tecnologia();
    //}
    // salvar usuário com chamada ao serviço
    TecnologiaComponent.prototype.salvarTecnologia = function (tecnologia) {
        var _this = this;
        if (!tecnologia.nome) {
            return;
        }
        this.tecnologiaService.salvarTecnologia(tecnologia)
            .subscribe(function (tecnologia) { return _this.popularLista(tecnologia); }, function (error) { return _this.errorMessage = error; });
    };
    TecnologiaComponent.prototype.popularLista = function (tecnologia) {
        this.tecnologias.push(tecnologia);
        this.tecnologiaObject = new tecnologia_1.Tecnologia();
    };
    // editar usuário apenas modificando a lista lo    cal
    //    editarTecnologia(tecnologia, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.tecnologiaObject = usuar    io;
    //        if (persisti    r){
    //            this.tecnologiaObject = new Tecnologia    ();
    //            this.edit = fal    se;
    //            }
    //    }
    TecnologiaComponent.prototype.editarTecnologia = function (tecnologia, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.tecnologiaObject = tecnologia;
        if (persistir) {
            if (!tecnologia.nome) {
                return;
            }
            this.tecnologiaService.salvarTecnologia(tecnologia)
                .subscribe(function (tecnologia) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
        //alert(tecnologia.nome);
    };
    TecnologiaComponent.prototype.atualizarFormulario = function () {
        this.tecnologiaObject = new tecnologia_1.Tecnologia();
        this.edit = false;
    };
    TecnologiaComponent.prototype.ngOnInit = function () {
        this.getListTecnologias();
    };
    return TecnologiaComponent;
}());
TecnologiaComponent = __decorate([
    core_1.Component({
        selector: 'tecnologia',
        templateUrl: 'app/tecnologia/templates/tecnologia.template.html',
        providers: [tecnologia_service_1.TecnologiaService]
    }),
    __metadata("design:paramtypes", [tecnologia_service_1.TecnologiaService])
], TecnologiaComponent);
exports.TecnologiaComponent = TecnologiaComponent;
//# sourceMappingURL=tecnologia.component.js.map