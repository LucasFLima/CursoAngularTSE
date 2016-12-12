import { Component, OnInit } from '@angular/core';  
import { Aluno } from '../class/aluno';
import { AlunoService } from '../service/aluno.service'

@Component({
    selector: 'aluno',
    templateUrl: 'app/aluno/templates/aluno.template.html',
    providers: [AlunoService]
})

export class AlunoComponent implements OnInit {
    
    alunos: Aluno[];
    
    constructor (private alunoService: AlunoService){}
    
    getListAluno(): void{
        this.alunoService.getListAluno().then(alunos => this.alunos = alunos);
    }
    
    ngOnInit(): void {
        this.getListAluno();
    }
    
    alunoObject = new Aluno();
    edit = false;
    
    deletarAluno(index): void{
        this.alunos.splice(index, 1);
    }
    
    salvarAluno(aluno): void{
        this.alunos.push(aluno);
        this.alunoObject = new Aluno();
    }
    
    editarAluno(aluno, persistir=false): void {
        this.edit = true;
        this.alunoObject = aluno;
        if (persistir){
            this.alunoObject = new Aluno();
            this.edit = false;
        }
    }
    
    
}
