import { Actividades } from './../models/actividades'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ActividadesService {

    private _actividad: Actividades

    private _srcActividad = new BehaviorSubject(this._actividad)
    currentActividad = this._srcActividad.asObservable()

    constructor(private _http: HttpClient) { }

    getActividades() {
        return this._http.get<Actividades[]>('http://localhost:8080/api/v1/actividades')
    }

    getActividad(id) {
        return this._http.get<Actividades>(`http://localhost:8080/api/v1/actividades/${id}`)
    }

    postActividad(actividad: Actividades) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        return this._http.post('http://localhost:8080/api/v1/actividades', actividad, httpOptions).subscribe()
    }

    changeActividad(actividad: Actividades) {
        return this._srcActividad.next(actividad)
    }

}
