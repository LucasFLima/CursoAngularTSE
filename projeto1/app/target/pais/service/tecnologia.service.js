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
// import { USUARIOS } from '../mock/tecnologia.mock';
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var TecnologiaService = (function () {
    // construtor da classe para http
    function TecnologiaService(http) {
        this.http = http;
        // link para chamada ao serviço REST
        //private tecnologiaServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/tecnologia/';
        this.tecnologiaServiceUrl = 'https://lucasangular.herokuapp.com/tecnologia';
    }
    // com chamada ao serviço MOCK
    //    getListTecnologia(): Promise<Tecnologia[]> {
    //        return Promise.resolve(USUARIOS);
    //    }
    // resultado por meio de observer
    TecnologiaService.prototype.getListTecnologia = function () {
        return this.http.get(this.tecnologiaServiceUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //método para salvar o usuário
    TecnologiaService.prototype.salvarTecnologia = function (tecnologia) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (!tecnologia._id) {
            return this.http.post(this.tecnologiaServiceUrl, tecnologia, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.tecnologiaServiceUrl + "/" + tecnologia._id, tecnologia, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    TecnologiaService.prototype.deletarTecnologia = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.tecnologiaServiceUrl + "/" + id, options);
    };
    //Crie esse método
    TecnologiaService.prototype.handleError = function (error) {
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
    return TecnologiaService;
}());
TecnologiaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TecnologiaService);
exports.TecnologiaService = TecnologiaService;
//# sourceMappingURL=tecnologia.service.js.map