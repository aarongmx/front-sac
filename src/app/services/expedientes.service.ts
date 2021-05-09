// import { ExpedientesService } from './expedientes.service'
import { Actividades } from './../models/actividades'
import { Expedientes } from './../models/expedientes'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Alumnos } from '../models/alumnos'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ExpedientesService {
    private _expediente: Expedientes

    private _srcExpediente = new BehaviorSubject({ id: this._expediente.id })
    currentExpediente = this._srcExpediente.asObservable()

    constructor(private _http: HttpClient) { }

    getExpedientes() {
        return this._http.get<Expedientes[]>('http://localhost:8080/api/v1/expedientes')
    }


    getExpedienteAlumno(noCtl) {
        return this._http.get<Expedientes>(`http://localhost:8080/api/v1/expedientes/${noCtl}`)
    }

    postExpediente(alumno: Alumnos, data) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        const expediente = {
            noCtl: alumno.noCtl,
            idActividad: data.actividad,
            periodo: data.periodo,
            finalizada: false,
            calificacion: 0
        }

        return this._http.post('http://localhost:8080/api/v1/expedientes', expediente, httpOptions)
    }

    putExpediente(expediente: Expedientes, id: Number) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        return this._http.put(`http://localhost:8080/api/v1/expedientes/${id}`, expediente, httpOptions)
    }

    changeExpediente(expediente: Expedientes) {
        this._srcExpediente.next(expediente)
    }
}
