import { Injectable } from '@angular/core';
import { Pais } from '../class/pais';
// import { USUARIOS } from '../mock/pais.mock';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaisService {
    
    // link para chamada ao serviço REST
    //private paisServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/pais/';
    private paisServiceUrl = 'https://lucasangular.herokuapp.com/pais';
    
    // construtor da classe para http
    constructor (private http: Http){}
    
    // com chamada ao serviço MOCK
//    getListPais(): Promise<Pais[]> {
//        return Promise.resolve(USUARIOS);
//    }
    
    // resultado por meio de observer
    getListPais(): Observable<Pais[]> {
        return this.http.get(this.paisServiceUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    //método para salvar o usuário
    salvarPais(pais: Pais): Observable<Pais> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!pais._id) {
            return this.http.post(this.paisServiceUrl, pais, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.paisServiceUrl + "/" + pais._id, pais, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }
    
    deletarPais(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.paisServiceUrl + "/" + id, options);
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