import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../interface/usuario.interface';
import { Usuario } from '../class/usuario'
import { UsuarioService } from '../service/usuario.service'


@Component({
    selector: 'usuario',
    templateUrl: 'app/usuario/templates/usuario.template.html',
    providers: [UsuarioService]
})

export class UsuarioComponent implements OnInit {
    // usuarios = USUARIOS;

    // implementação do método de listar usuários
    // usuarios = this.listar();

    // implementação com a lista de usuários sendo carregada dentro do próprio compone    nte
//    listar(): Usuario[    ] {
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
    usuarios: Usuario[];
    errorMessage: string;
    i: number;

    constructor(private usuarioService: UsuarioService) { }

    // Chamada ao serviço com mock
    // getListUsuarios(): void{
    //     this.usuarioService.getListUsuario().then(usuarios => this.usuarios = usuarios);
    // }

    getListUsuarios(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
            usuarios => this.usuarios = usuarios,
            error => this.errorMessage = <any>error);
    }

    usuarioObject = new Usuario();
    edit = false;


    // deletar pela remoção da lista (sem chamada a serviço)
    //deletarUsuario(index): void {
    //    this.usuarios.splice(index, 1);
    //}

    //delete com chamada a serviço
    deletarUsuario(id, i): void {
        this.i = i;
        this.usuarioService.deletarUsuario(id)
            .subscribe(
            success => this.usuarios.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    // salvar usuário apenas com a exclusão da lista local 
    //salvarUsuario(usuario): void {
    //    this.usuarios.push(usuario);
    //    this.usuarioObject = new Usuario();
    //}

    // salvar usuário com chamada ao serviço
    salvarUsuario(usuario: Usuario) {
        if (!usuario.nome) { return; }
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(
            usuario => this.popularLista(usuario),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(usuario: Usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new Usuario();
    }

    // editar usuário apenas modificando a lista lo    cal
//    editarUsuario(usuario, persistir=false): vo    id{
//        this.edit = tr    ue;
//        this.usuarioObject = usuar    io;
//        if (persisti    r){
//            this.usuarioObject = new Usuario    ();
//            this.edit = fal    se;
//            }
//    }

    editarUsuario(usuario: Usuario, persistir = false): void {

        this.edit = true;
        this.usuarioObject = usuario;
        if (persistir) {
            if (!usuario.nome) { return; }
            this.usuarioService.salvarUsuario(usuario)
                .subscribe(
                usuario => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
        alert("Teste");

    }

    atualizarFormulario(): void {
        this.usuarioObject = new Usuario();
        this.edit = false;
    }

    ngOnInit(): void {
        this.getListUsuarios();
    }
}
