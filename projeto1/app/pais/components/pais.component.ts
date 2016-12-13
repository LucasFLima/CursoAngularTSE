import { Component, OnInit } from '@angular/core';
import { Pais } from '../class/pais';
import { PaisService } from '../service/pais.service';


@Component({
    selector: 'pais',
    templateUrl: 'app/pais/templates/pais.template.html',
    providers: [PaisService]
})

export class PaisComponent implements OnInit {
    // paiss = USUARIOS;
    
    cursos = [
        {codigo: '10', nome: 'nome'},
        {codigo: '20', nome: 'nome20'}
    ]

    // implementação do método de listar usuários
    // paiss = this.listar();

    // implementação com a lista de usuários sendo carregada dentro do próprio compone    nte
    //    listar(): Pais[    ] {
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
    paises: Pais[];
    errorMessage: string;
    i: number;

    constructor(private paisService: PaisService) { }

    // Chamada ao serviço com mock
    // getListPaiss(): void{
    //     this.paisService.getListPais().then(paiss => this.paiss = paiss);
    // }

    getListPaiss(): void {
        this.paisService.getListPais()
            .subscribe(
            paiss => this.paises = paiss,
            error => this.errorMessage = <any>error);
    }

    paisObject = new Pais();
    edit = false;


    // deletar pela remoção da lista (sem chamada a serviço)
    //deletarPais(index): void {
    //    this.paiss.splice(index, 1);
    //}

    paisDel: String;

    //delete com chamada a serviço
    deletarPais(id, i): void {
        //this.paisDel = id;
        this.paisDel = this.paises[i].nome;
        alert("Exclusão da pais: " + this.paisDel);
        this.i = i;
        this.paisService.deletarPais(id)
            .subscribe(
            success => this.paises.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    // salvar usuário apenas com a exclusão da lista local 
    //salvarPais(pais): void {
    //    this.paiss.push(pais);
    //    this.paisObject = new Pais();
    //}

    // salvar usuário com chamada ao serviço
    salvarPais(pais: Pais) {
        console.log(pais);
        if (!pais.nome) { return; }
        this.paisService.salvarPais(pais)
            .subscribe(
            pais => this.popularLista(pais),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(pais: Pais) {
        this.paises.push(pais);
        this.paisObject = new Pais();
        this.paisObject.curso = {codigo:"", nome: ""};
    }

    // editar usuário apenas modificando a lista lo    cal
    //    editarPais(pais, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.paisObject = usuar    io;
    //        if (persisti    r){
    //            this.paisObject = new Pais    ();
    //            this.edit = fal    se;
    //            }
    //    }

    editarPais(pais: Pais, persistir = false): void {

        this.edit = true;
        this.paisObject = pais;
        if (persistir) {
            if (!pais.nome) { return; }
            this.paisService.salvarPais(pais)
                .subscribe(
                pais => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
        //alert(pais.nome);

    }

    atualizarFormulario(): void {
        this.paisObject = new Pais();
        this.paisObject.curso = {codigo:"", nome: ""};
        this.edit = false;
    }

    ngOnInit(): void {
        this.getListPaiss();
        this.paisObject.curso = {codigo:"", nome: ""};
        
    }
}
