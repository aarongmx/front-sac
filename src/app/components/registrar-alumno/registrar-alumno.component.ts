import { Alumnos } from './../../models/alumnos'
import { AlumnoService } from './../../services/alumno.service'
import { CarrerasService } from './../../services/carreras.service'
import { Component, OnInit } from '@angular/core'
import { Carreras } from 'src/app/models/carreras'

@Component({
    selector: 'app-registrar-alumno',
    templateUrl: './registrar-alumno.component.html',
    styleUrls: ['./registrar-alumno.component.scss']
})
export class RegistrarAlumnoComponent implements OnInit {

    private _carreras: Carreras[]

    constructor(private _service: CarrerasService, private _alumnosService: AlumnoService) { }

    ngOnInit() {
        this._service.getCarreras().subscribe(data => {
            this._carreras = data
        })

    }

    registrar(data) {
        this._alumnosService.postAlumno(data)
    }

    getCarreras() {
        return this._carreras
    }

}
