import { ProfesoresService } from './../../services/profesores.service'
import { CategoriasService } from './../../services/categorias.service'
import { ActividadesService } from './../../services/actividades.service'
import { Actividades } from './../../models/actividades'
import { Component, OnInit } from '@angular/core'
import { Profesores } from 'src/app/models/profesores'
import { Categorias } from 'src/app/models/categorias'

@Component({
    selector: 'app-registrar-actividades',
    templateUrl: './registrar-actividades.component.html',
    styleUrls: ['./registrar-actividades.component.scss']
})
export class RegistrarActividadesComponent implements OnInit {

    private _activiades: Actividades[]
    private _profesores: Profesores[]
    private _categorias: Categorias[]

    constructor(
        private _service: ActividadesService,
        private _categoriasService: CategoriasService,
        private _profesorService: ProfesoresService) { }

    ngOnInit() {
        this._categoriasService.getCategorias().subscribe(data => this._categorias = data)
        this._profesorService.getProfesores().subscribe(data => this._profesores = data)

    }

    getCategorias() {
        return this._categorias
    }

    getProfesores() {
        return this._profesores
    }

    registrarAct(data) {
        return this._service.postActividad(data)
    }

}
