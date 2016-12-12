import { Injectable } from '@angular/core';
import { Aluno } from '../class/aluno';
import { ALUNOS } from '../mock/aluno.mock';

@Injectable()
export class AlunoService {

    getListAluno(): Promise<Aluno[]> {
        return Promise.resolve(ALUNOS);
    }

}