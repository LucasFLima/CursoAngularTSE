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
var carro_1 = require('./carro');
var CarroComponent = (function () {
    function CarroComponent() {
        this.carros = [
            { cor: 'prata', modelo: 'Polo', ano: '2007', placa: 'JFH-4846', quantidadeRevisao: '6' }
        ];
        this.carroObject = new carro_1.Carro();
        this.edit = false;
    }
    CarroComponent.prototype.deletarCarro = function (index) {
        this.carros.splice(index, 1);
    };
    CarroComponent.prototype.salvarCarro = function (carro) {
        this.carros.push(carro);
        this.carroObject = new carro_1.Carro();
    };
    CarroComponent.prototype.editarCarro = function (carro, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.carroObject = carro;
        if (persistir) {
            this.carroObject = new carro_1.Carro();
            this.edit = false;
        }
    };
    CarroComponent = __decorate([
        core_1.Component({
            selector: 'carro',
            templateUrl: 'app/carro.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CarroComponent);
    return CarroComponent;
}());
exports.CarroComponent = CarroComponent;
//# sourceMappingURL=carro.component.js.map