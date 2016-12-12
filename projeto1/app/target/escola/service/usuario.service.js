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
// import { USUARIOS } from '../mock/usuario.mock';
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UsuarioService = (function () {
    // construtor da classe para http
    function UsuarioService(http) {
        this.http = http;
        // link para chamada ao serviço REST
        this.usuarioServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/usuario/';
    }
    // com chamada ao serviço MOCK
    //    getListUsuario(): Promise<Usuario[]> {
    //        return Promise.resolve(USUARIOS);
    //    }
    // resultado por meio de observer
    UsuarioService.prototype.getListUsuario = function () {
        return this.http.get(this.usuarioServiceUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //método para salvar o usuário
    UsuarioService.prototype.salvarUsuario = function (usuario) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (!usuario._id) {
            return this.http.post(this.usuarioServiceUrl, usuario, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.usuarioServiceUrl + "/" + usuario._id, usuario, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    UsuarioService.prototype.deletarUsuario = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.usuarioServiceUrl + "/" + id, options);
    };
    //Crie esse método
    UsuarioService.prototype.handleError = function (error) {
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
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map