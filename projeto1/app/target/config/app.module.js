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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//passo 2 (importar o componente criado)
var app_component_1 = require("./app.component");
//importar o componente de usuário
var usuario_component_1 = require("../usuario/components/usuario.component");
//importar o componente de usuário
var perfil_component_1 = require("../perfil/components/perfil.component");
//importar o componente de aluno
var aluno_component_1 = require("../aluno/components/aluno.component");
//importar o componente de tecnologia
var tecnologia_component_1 = require("../tecnologia/components/tecnologia.component");
//importar o componente de situacao
var situacao_component_1 = require("../situacao/components/situacao.component");
//importar o componente de pais
var pais_component_1 = require("../pais/components/pais.component");
//importar o componente de clima
var clima_component_1 = require("../clima/components/clima.component");
var home_component_1 = require("../home/components/home.component");
var routes_1 = require("./routes/routes");
var perfil_component_form_1 = require("../perfil/components/perfil.component.form");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            routes_1.routing
        ],
        //Adicionar essa linha
        declarations: [
            app_component_1.AppComponent,
            usuario_component_1.UsuarioComponent,
            perfil_component_1.PerfilComponent,
            aluno_component_1.AlunoComponent,
            tecnologia_component_1.TecnologiaComponent,
            situacao_component_1.SituacaoComponent,
            pais_component_1.PaisComponent,
            clima_component_1.ClimaComponent,
            home_component_1.HomeComponent,
            perfil_component_form_1.PerfilComponentForm
        ],
        //Adicionar essa linha
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map