import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';
// import { USUARIOS } from '../mock/usuario.mock';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {
    
    // link para chamada ao serviço REST
    private usuarioServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/usuario/';
    
    // construtor da classe para http
    constructor (private http: Http){}
    
    // com chamada ao serviço MOCK
//    getListUsuario(): Promise<Usuario[]> {
//        return Promise.resolve(USUARIOS);
//    }
    
    // resultado por meio de observer
    getListUsuario(): Observable<Usuario[]> {
        return this.http.get(this.usuarioServiceUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    //método para salvar o usuário
    salvarUsuario(usuario: Usuario): Observable<Usuario> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!usuario._id) {
            return this.http.post(this.usuarioServiceUrl, usuario, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.usuarioServiceUrl + "/" + usuario._id, usuario, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }
    
    deletarUsuario(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.usuarioServiceUrl + "/" + id, options);
    }
    
    //Crie esse método
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}