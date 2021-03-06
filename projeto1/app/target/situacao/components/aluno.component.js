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
var aluno_1 = require("../class/aluno");
var aluno_service_1 = require("../service/aluno.service");
var AlunoComponent = (function () {
    function AlunoComponent(alunoService) {
        this.alunoService = alunoService;
        this.alunoObject = new aluno_1.Aluno();
        this.edit = false;
    }
    AlunoComponent.prototype.getListAluno = function () {
        var _this = this;
        this.alunoService.getListAluno().then(function (alunos) { return _this.alunos = alunos; });
    };
    AlunoComponent.prototype.ngOnInit = function () {
        this.getListAluno();
    };
    AlunoComponent.prototype.deletarAluno = function (index) {
        this.alunos.splice(index, 1);
    };
    AlunoComponent.prototype.salvarAluno = function (aluno) {
        this.alunos.push(aluno);
        this.alunoObject = new aluno_1.Aluno();
    };
    AlunoComponent.prototype.editarAluno = function (aluno, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.alunoObject = aluno;
        if (persistir) {
            this.alunoObject = new aluno_1.Aluno();
            this.edit = false;
        }
    };
    return AlunoComponent;
}());
AlunoComponent = __decorate([
    core_1.Component({
        selector: 'aluno',
        templateUrl: 'app/aluno/templates/aluno.template.html',
        providers: [aluno_service_1.AlunoService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof aluno_service_1.AlunoService !== "undefined" && aluno_service_1.AlunoService) === "function" && _a || Object])
], AlunoComponent);
exports.AlunoComponent = AlunoComponent;
var _a;
//# sourceMappingURL=aluno.component.js.map