import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Alumnos } from '../models/alumnos'
import { map } from 'rxjs/operators'
import { Formulario } from '../models/formulario'
@Injectable({
    providedIn: 'root'
})
export class TecService {
    alumnos: Alumnos[] = [];
    alumno: Alumnos
    formulario: Formulario
    valor: number

    constructor(private http: HttpClient) {
        console.log('Va a cosumir un Servicio Rest')
    }

    getAlumnosTec() {
        return this.http.get<Alumnos[]>('http://localhost:8080/api/v1/alumnos')
    }


    setAlumno(alumno: Alumnos) {
        this.alumno = alumno
    }

    getAlumno() {
        this.http.get<Alumnos>(`http://localhost:8080/api/v1/alumnos/${this.alumno.noCtl}`).subscribe(data => { this.alumno = data })
        return this.alumno
    }

    getFormulario(formulario: Formulario, valor: number) {
        this.formulario = formulario
        console.log(this.formulario)
        this.valor = valor
    }

    getActividades() {
        return this.http.get(`http://localhost:8080/api/v1/actividades`)
    }

    dameFormulario() {
        return this.formulario
    }

    dameResultadoRadio() {
        return this.valor
    }
}
