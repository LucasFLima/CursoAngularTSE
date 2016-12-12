import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../class/tecnologia'
import { TecnologiaService } from '../service/tecnologia.service'


@Component({
    selector: 'tecnologia',
    templateUrl: 'app/tecnologia/templates/tecnologia.template.html',
    providers: [TecnologiaService]
})

export class TecnologiaComponent implements OnInit {
    // tecnologias = USUARIOS;

    // implementação do método de listar usuários
    // tecnologias = this.listar();

    // implementação com a lista de usuários sendo carregada dentro do próprio compone    nte
    //    listar(): Tecnologia[    ] {
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
    tecnologias: Tecnologia[];
    errorMessage: string;
    i: number;

    constructor(private tecnologiaService: TecnologiaService) { }

    // Chamada ao serviço com mock
    // getListTecnologias(): void{
    //     this.tecnologiaService.getListTecnologia().then(tecnologias => this.tecnologias = tecnologias);
    // }

    getListTecnologias(): void {
        this.tecnologiaService.getListTecnologia()
            .subscribe(
            tecnologias => this.tecnologias = tecnologias,
            error => this.errorMessage = <any>error);
    }

    tecnologiaObject = new Tecnologia();
    edit = false;


    // deletar pela remoção da lista (sem chamada a serviço)
    //deletarTecnologia(index): void {
    //    this.tecnologias.splice(index, 1);
    //}

    tecnologiaDel: String;

    //delete com chamada a serviço
    deletarTecnologia(id, i): void {
        //this.tecnologiaDel = id;
        this.tecnologiaDel = this.tecnologias[i].nome;
        alert("Exclusão da tecnologia: " + this.tecnologiaDel);
        this.i = i;
        this.tecnologiaService.deletarTecnologia(id)
            .subscribe(
            success => this.tecnologias.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    // salvar usuário apenas com a exclusão da lista local 
    //salvarTecnologia(tecnologia): void {
    //    this.tecnologias.push(tecnologia);
    //    this.tecnologiaObject = new Tecnologia();
    //}

    // salvar usuário com chamada ao serviço
    salvarTecnologia(tecnologia: Tecnologia) {
        if (!tecnologia.nome) { return; }
        this.tecnologiaService.salvarTecnologia(tecnologia)
            .subscribe(
            tecnologia => this.popularLista(tecnologia),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(tecnologia: Tecnologia) {
        this.tecnologias.push(tecnologia);
        this.tecnologiaObject = new Tecnologia();
    }

    // editar usuário apenas modificando a lista lo    cal
    //    editarTecnologia(tecnologia, persistir=false): vo    id{
    //        this.edit = tr    ue;
    //        this.tecnologiaObject = usuar    io;
    //        if (persisti    r){
    //            this.tecnologiaObject = new Tecnologia    ();
    //            this.edit = fal    se;
    //            }
    //    }

    editarTecnologia(tecnologia: Tecnologia, persistir = false): void {

        this.edit = true;
        this.tecnologiaObject = tecnologia;
        if (persistir) {
            if (!tecnologia.nome) { return; }
            this.tecnologiaService.salvarTecnologia(tecnologia)
                .subscribe(
                tecnologia => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
        //alert(tecnologia.nome);

    }

    atualizarFormulario(): void {
        this.tecnologiaObject = new Tecnologia();
        this.edit = false;
    }

    ngOnInit(): void {
        this.getListTecnologias();
    }
}
