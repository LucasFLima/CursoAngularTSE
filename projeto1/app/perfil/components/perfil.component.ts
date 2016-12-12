import { Component, OnInit } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PerfilService } from '../service/perfil.service';


@Component({
    selector: 'perfil',
    templateUrl: 'app/perfil/templates/perfil.template.html',
    providers: [PerfilService]
})

export class PerfilComponent implements OnInit {
//    perfis = [
//                { nome: 'Adminstrador'},
//                { nome: 'Operador'},
//                { nome: 'Consulta'}
//                
//            ];
    perfis: Perfil[];
    
    constructor(private perfilService: PerfilService){ }
    
    getListUsuario(): void{
        this.perfilService.getListPerfis().then(perfis => this.perfis = perfis);
    }
    
    ngOnInit(): void {
        this.getListUsuario();
    } 
    
    perfilObject = new Perfil();
    edit = false;
    
    deletarPerfil(index): void{
        this.perfis.splice(index, 1);
    }
    
    salvarPerfil(perfil): void{
        this.perfis.push(perfil);
        this.perfilObject = new Perfil();
    }
    
    editarPerfil(perfil, persistir=false): void {
        this.edit = true;
        this.perfilObject = perfil;
        if (persistir){
            this.perfilObject = new Perfil();
            this.edit = false;
        }
    }
        

}

