//import { Injectable } from '@angular/core';
//import { Perfil } from '../class/perfil';
//import { PERFIS } from '../mock/perfil.mock';
//
//@Injectable()
//export class PerfilService {
//
//    getListPerfis(): Promise<Perfil[]> {
//        return Promise.resolve(PERFIS);
//    }
//
//}
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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var PerfilService = (function () {
    function PerfilService(http) {
        this.http = http;
        this.perfilUrl = 'https://cursoangularjs2restful.herokuapp.com/perfil';
    }
    PerfilService.prototype.fetchAll = function () {
        return this.http.get(this.perfilUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PerfilService.prototype.get = function (id) {
        return this.http.get(this.perfilUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //método para salvar o Perfil
    PerfilService.prototype.salvar = function (perfil) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        if (!perfil._id) {
            return this.http.post(this.perfilUrl, perfil, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.perfilUrl + "/" + perfil._id, perfil, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    PerfilService.prototype.deletar = function (id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.delete(this.perfilUrl + "/" + id, options);
    };
    PerfilService.prototype.handleError = function (error) {
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
    return PerfilService;
}());
PerfilService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PerfilService);
exports.PerfilService = PerfilService;
//# sourceMappingURL=perfil.service.js.map