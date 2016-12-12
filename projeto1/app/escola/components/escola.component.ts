import { Component, OnInit } from '@angular/core';
import { Escola } from '../class/escola'
import { EscolaService } from '../service/escola.service'


@Component({
    selector: 'escola',
    templateUrl: 'app/escola/templates/escola.template.html',
    providers: [EscolaService]
})

export class EscolaComponent implements OnInit {
    // escolas = USUARIOS;

    // implementação do método de listar usuários
    // escolas = this.listar();

    // implementação com a lista de usuários sendo carregada dentro do próprio compone    nte
    //    listar(): Escola[    ] {
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
    escolas: Escola[];
    errorMessage: string;
    i: number;

    constructor(private escolaService: EscolaService) { }

    // Chamada ao serviço com mock
    // getListEscolas(): void{
    //     this.escolaService.getListEscola().then(escolas => this.escolas = escolas);
    // }

    getListEscolas(): void {
        this.escolaService.getListEscola()
            .subscribe(
            escolas => this.escolas = escolas,
            error => this.errorMessage = <any>error);
    }

    escolaObject = new Escola();
    edit = false;


    // deletar pela remoção da lista (sem chamada a serviço)
    //deletarEscola(index): void {
    //    this.escolas.splice(index, 1);
    //}

    escolaDel: String;

    //delete com chamada a serviço
    deletarEscola(id, i): void {
        //this.escolaDel = id;
        this.escolaDel = this.escolas[i].nome;
        alert("Exclusão da escola: " + this.escolaDel);
        this.i = i;
        this.escolaService.deletarEscola(id)
            .subscribe(
            success => this.escolas.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    // salvar usuário apenas com a exclusão da lista local 
    //salvarEscola(escola): void {
    //    this.escolas.push(escola);
    //    this.escolaObject = new Escola();
    //}

    // salvar usuário com chamada ao serviço
    salvarEscola(escola: Escola) {
        if (!escola.nome) { return; }
        this.escolaService.salvarEscola(escola)
            .subscribe(
            escola => this.popularLista(escola),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(escola: Escola) {
        this.escolas.push(escola);
        this.escolaObject = new Escola();
    }

    // editar usuário apenas modificando a lista lo    cal
    //    editarEscola(escola, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.escolaObject = usuar    io;
    //        if (persisti    r){
    //            this.escolaObject = new Escola    ();
    //            this.edit = fal    se;
    //            }
    //    }

    editarEscola(escola: Escola, persistir = false): void {

        this.edit = true;
        this.escolaObject = escola;
        if (persistir) {
            if (!escola.nome) { return; }
            this.escolaService.salvarEscola(escola)
                .subscribe(
                escola => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
        //alert(escola.nome);

    }

    atualizarFormulario(): void {
        this.escolaObject = new Escola();
        this.edit = false;
    }

    ngOnInit(): void {
        this.getListEscolas();
    }
}
