import { Injectable } from '@angular/core';
import { Tecnologia } from '../class/tecnologia';
// import { USUARIOS } from '../mock/tecnologia.mock';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TecnologiaService {
    
    // link para chamada ao serviço REST
    //private tecnologiaServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/tecnologia/';
    private tecnologiaServiceUrl = 'https://lucasangular.herokuapp.com/tecnologia';
    
    // construtor da classe para http
    constructor (private http: Http){}
    
    // com chamada ao serviço MOCK
//    getListTecnologia(): Promise<Tecnologia[]> {
//        return Promise.resolve(USUARIOS);
//    }
    
    // resultado por meio de observer
    getListTecnologia(): Observable<Tecnologia[]> {
        return this.http.get(this.tecnologiaServiceUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    //método para salvar o usuário
    salvarTecnologia(tecnologia: Tecnologia): Observable<Tecnologia> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!tecnologia._id) {
            return this.http.post(this.tecnologiaServiceUrl, tecnologia, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.tecnologiaServiceUrl + "/" + tecnologia._id, tecnologia, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }
    
    deletarTecnologia(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.tecnologiaServiceUrl + "/" + id, options);
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