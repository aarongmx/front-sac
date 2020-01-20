import { Alumnos } from './../models/alumnos'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class AlumnoService {
    private _alumnos: Alumnos[]
    private _alumno: Alumnos

    private _srcAlumno = new BehaviorSubject(this._alumno)
    currentAlumno = this._srcAlumno.asObservable()

    constructor(private _http: HttpClient) { }

    getAlumnos() {
        return this._http.get<Alumnos[]>(`http://localhost:8080/api/v1/alumnos`)
    }

    getAlumnoByID(noCtl) {
        return this._http.get<Alumnos>(`http://localhost:8080/api/v1/alumnos/${noCtl}`)
    }

    getAlumno() {
        return this._alumno
    }

    setAlumno(alumno: Alumnos) {
        this._alumno = alumno
    }

    postAlumno(alumno: any) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this._http.post('http://localhost:8080/api/v1/alumnos', alumno, httpOptions).subscribe()
    }

    changeStudent(alumno: Alumnos) {
        this._srcAlumno.next(alumno)
    }

}
