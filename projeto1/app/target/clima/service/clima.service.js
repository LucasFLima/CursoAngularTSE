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
// import { USUARIOS } from '../mock/clima.mock';
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var ClimaService = (function () {
    // construtor da classe para http
    function ClimaService(http) {
        this.http = http;
        // link para chamada ao serviço REST
        //private climaServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/clima/';
        this.climaServiceUrl = 'https://lucasangular.herokuapp.com/clima';
    }
    // com chamada ao serviço MOCK
    //    getListClima(): Promise<Clima[]> {
    //        return Promise.resolve(USUARIOS);
    //    }
    // resultado por meio de observer
    ClimaService.prototype.getListClima = function () {
        return this.http.get(this.climaServiceUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //método para salvar o usuário
    ClimaService.prototype.salvarClima = function (clima) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (!clima._id) {
            return this.http.post(this.climaServiceUrl, clima, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.climaServiceUrl + "/" + clima._id, clima, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    ClimaService.prototype.deletarClima = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.climaServiceUrl + "/" + id, options);
    };
    //Crie esse método
    ClimaService.prototype.handleError = function (error) {
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
    return ClimaService;
}());
ClimaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ClimaService);
exports.ClimaService = ClimaService;
//# sourceMappingURL=clima.service.js.map