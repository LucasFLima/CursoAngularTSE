import { Component, OnInit } from '@angular/core';
import { Clima } from '../class/clima'
import { ClimaService } from '../service/clima.service'


@Component({
    selector: 'clima',
    templateUrl: 'app/clima/templates/clima.template.html',
    providers: [ClimaService]
})

export class ClimaComponent implements OnInit {
    // climas = USUARIOS;

    // implementação do método de listar usuários
    // climas = this.listar();

    // implementação com a lista de usuários sendo carregada dentro do próprio compone    nte
    //    listar(): Clima[    ] {
    //        retur    n [
    //            { id: 11, nome: 'João', idade: 20     },
    //            { id: 12, nome: 'Maria', idade: 24     },
    //            { id: 13, nome: 'Joana', idade: 29     },
    //            { id: 14, nome: 'José', idade: 60     },
    //            { id: 15, nome: 'Magneta', idade: 89     },
    ////            { id: 16, nome: 'RubberMan', idade: 21     },
    ////            { id: 17, nome: 'Dynama', idade: 29     },
    ////            { id: 18, nome: 'Dr IQ', idade: 26     },
    ////            { id: 19, nome: 'Nataniel', idade: 25     },
    ////            { id: 20, nome: 'Jéssica', idade: 23     },
    //            { id: 21, nome: 'Lucas Lima', idade: 3    5 }
    //            ]
    //    } 


    // implementação com chamada ao serviço 
    climas: Clima[];
    errorMessage: string;
    i: number;

    constructor(private climaService: ClimaService) { }

    // Chamada ao serviço com mock
    // getListClimas(): void{
    //     this.climaService.getListClima().then(climas => this.climas = climas);
    // }

    getListClimas(): void {
        this.climaService.getListClima()
            .subscribe(
            climas => this.climas = climas,
            error => this.errorMessage = <any>error);
    }

    climaObject = new Clima();
    edit = false;


    // deletar pela remoção da lista (sem chamada a serviço)
    //deletarClima(index): void {
    //    this.climas.splice(index, 1);
    //}

    climaDel: String;

    //delete com chamada a serviço
    deletarClima(id, i): void {
        //this.climaDel = id;
        this.climaDel = this.climas[i].nome;
        alert("Exclusão da clima: " + this.climaDel);
        this.i = i;
        this.climaService.deletarClima(id)
            .subscribe(
            success => this.climas.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    // salvar usuário apenas com a exclusão da lista local 
    //salvarClima(clima): void {
    //    this.climas.push(clima);
    //    this.climaObject = new Clima();
    //}

    // salvar usuário com chamada ao serviço
    salvarClima(clima: Clima) {
        if (!clima.nome) { return; }
        this.climaService.salvarClima(clima)
            .subscribe(
            clima => this.popularLista(clima),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(clima: Clima) {
        this.climas.push(clima);
        this.climaObject = new Clima();
    }

    // editar usuário apenas modificando a lista lo    cal
    //    editarClima(clima, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.climaObject = usuar    io;
    //        if (persisti    r){
    //            this.climaObject = new Clima    ();
    //            this.edit = fal    se;
    //            }
    //    }

    editarClima(clima: Clima, persistir = false): void {

        this.edit = true;
        this.climaObject = clima;
        if (persistir) {
            if (!clima.nome) { return; }
            this.climaService.salvarClima(clima)
                .subscribe(
                clima => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
        //alert(clima.nome);

    }

    atualizarFormulario(): void {
        this.climaObject = new Clima();
        this.edit = false;
    }

    ngOnInit(): void {
        this.getListClimas();
    }
}
