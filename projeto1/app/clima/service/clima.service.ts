import { Injectable } from '@angular/core';
import { Clima } from '../class/clima';
// import { USUARIOS } from '../mock/clima.mock';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClimaService {
    
    // link para chamada ao serviço REST
    //private climaServiceUrl = 'https://cursoangularjs2restful.herokuapp.com/clima/';
    private climaServiceUrl = 'https://lucasangular.herokuapp.com/clima';
    
    // construtor da classe para http
    constructor (private http: Http){}
    
    // com chamada ao serviço MOCK
//    getListClima(): Promise<Clima[]> {
//        return Promise.resolve(USUARIOS);
//    }
    
    // resultado por meio de observer
    getListClima(): Observable<Clima[]> {
        return this.http.get(this.climaServiceUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    //método para salvar o usuário
    salvarClima(clima: Clima): Observable<Clima> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!clima._id) {
            return this.http.post(this.climaServiceUrl, clima, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.climaServiceUrl + "/" + clima._id, clima, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }
    
    deletarClima(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.climaServiceUrl + "/" + id, options);
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