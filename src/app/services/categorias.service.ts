import { Categorias } from './../models/categorias'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class CategoriasService {

    constructor(private _http: HttpClient) { }

    getCategorias() {
        return this._http.get<Categorias[]>('http://localhost:8080/api/v1/categorias')
    }

    getCategoria(id) {
        return this._http.get<Categorias>(`http://localhost:8080/api/v1/categorias/${id}`)
    }
}
