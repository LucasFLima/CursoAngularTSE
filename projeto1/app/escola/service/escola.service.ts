import { Injectable } from '@angular/core';
import { Escola } from '../class/escola';
// import { USUARIOS } from '../mock/escola.mock';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EscolaService {
    
    // link para chamada ao serviço REST
    //private escolaServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/escola/';
    private escolaServiceUrl = 'https://lucasangular.herokuapp.com/escola';
    
    // construtor da classe para http
    constructor (private http: Http){}
    
    // com chamada ao serviço MOCK
//    getListEscola(): Promise<Escola[]> {
//        return Promise.resolve(USUARIOS);
//    }
    
    // resultado por meio de observer
    getListEscola(): Observable<Escola[]> {
        return this.http.get(this.escolaServiceUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    //método para salvar o usuário
    salvarEscola(escola: Escola): Observable<Escola> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!escola._id) {
            return this.http.post(this.escolaServiceUrl, escola, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.escolaServiceUrl + "/" + escola._id, escola, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }
    
    deletarEscola(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.escolaServiceUrl + "/" + id, options);
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