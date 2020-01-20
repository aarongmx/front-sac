import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Profesores } from '../models/profesores'

@Injectable({
    providedIn: 'root'
})
export class ProfesoresService {

    constructor(private _http: HttpClient) { }

    getProfesores() {
        return this._http.get<Profesores[]>('http://localhost:8080/api/v1/profesores')
    }

    getProfesor(id) {
        return this._http.get<Profesores>(`http://localhost:8080/api/v1/profesores/${id}`)
    }
}
