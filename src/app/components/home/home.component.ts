import { AlumnoService } from './../../services/alumno.service'
import { Alumnos } from './../../models/alumnos'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    private _alumno: Alumnos
    private _alumnos: Alumnos[]
    buscar:string = ''

    constructor(private _service: AlumnoService,
        private _router: Router) {

    }

    ngOnInit() {
        this._service.getAlumnos().subscribe(data => this._alumnos = data)

    }

    getAlumnos() {
        return this._alumnos
    }

    enviaAlumno(alumno: Alumnos) {
        this._service.changeStudent(alumno)
        this._router.navigate(['/expedientes'])
    }

}
