import { Injectable } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PERFIS } from '../mock/perfil.mock';

@Injectable()
export class PerfilService {

    getListPerfis(): Promise<Perfil[]> {
        return Promise.resolve(PERFIS);
    }

}