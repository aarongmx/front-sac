import { Carreras } from './../models/carreras'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})
export class CarrerasService {
    private _url = 'http://localhost:8080/api/v1'
    constructor(private _http: HttpClient) { }

    getCarreras() {
        return this._http.get<Carreras[]>(`${this._url}/carreras`)
    }

    getCarrera(id) {
        return this._http.get<Carreras>(`${this._url}/carreras/${id}`)
    }

}
