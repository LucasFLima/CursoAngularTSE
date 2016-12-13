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
// import { USUARIOS } from '../mock/pais.mock';
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var PaisService = (function () {
    // construtor da classe para http
    function PaisService(http) {
        this.http = http;
        // link para chamada ao serviço REST
        //private paisServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/pais/';
        this.paisServiceUrl = 'https://lucasangular.herokuapp.com/pais';
    }
    // com chamada ao serviço MOCK
    //    getListPais(): Promise<Pais[]> {
    //        return Promise.resolve(USUARIOS);
    //    }
    // resultado por meio de observer
    PaisService.prototype.getListPais = function () {
        return this.http.get(this.paisServiceUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //método para salvar o usuário
    PaisService.prototype.salvarPais = function (pais) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (!pais._id) {
            return this.http.post(this.paisServiceUrl, pais, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.paisServiceUrl + "/" + pais._id, pais, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    PaisService.prototype.deletarPais = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.paisServiceUrl + "/" + id, options);
    };
    //Crie esse método
    PaisService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return PaisService;
}());
PaisService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PaisService);
exports.PaisService = PaisService;
//# sourceMappingURL=pais.service.js.map