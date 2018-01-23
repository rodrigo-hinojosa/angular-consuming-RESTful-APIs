import { Injectable } from '@angular/core';
import { Feriado } from '../models/feriado';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FeriadoService {

  	constructor(private http:Http) { }

  	getFeriados(): Observable<Feriado[]> {
		return this.http.get('https://feriados-cl-api.herokuapp.com/feriados').map((response: Response) => response.json())
		.catch((error:any) => Observable.throw(error.json().error || {message: "Error del Servidor"} ));
	}

}
