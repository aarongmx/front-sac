import { ExpedientesService } from './../../services/expedientes.service'
import { Expedientes } from './../../models/expedientes'
import { Actividades } from './../../models/actividades'
import { AlumnoService } from './../../services/alumno.service'
import { ActividadesService } from './../../services/actividades.service'
import { Component, OnInit } from '@angular/core'
import { DataTec } from '../../services/data.Tec'
import { TecService } from '../../services/tec.service'
import { Router } from '@angular/router'
import { Alumnos } from '../../models/alumnos'
import { Formulario } from '../../models/formulario'

@Component({
    selector: 'app-tec1',
    templateUrl: './registrar-evaluacion.component.html',
    styleUrls: ['./registrar-evaluacion.component.scss'],
})

export class RegistrarEvaluacionComponent implements OnInit {
    private _alumno: Alumnos
    private _actividad: Actividades
    private _expediente: Expedientes
    _dataCriterio: any[] = [];
    private _sumaTotal: number[] = [];
    _valor = [0, 1, 2, 3, 4];
    private _resultado: number
    private _activo = false;
    private _actividades: Actividades[]

    public desemp: string


    private _cts = [
        { name: 'c1', value: 0 },
        { name: 'c2', value: 0 },
        { name: 'c3', value: 0 },
        { name: 'c4', value: 0 },
        { name: 'c5', value: 0 },
        { name: 'c6', value: 0 },
        { name: 'c7', value: 0 },
    ]

    public resultado: Number

    formulario: Formulario = {
        actividad: null,
        periodo: null,
        observaciones: null,
        resultado: this._resultado
    };

    constructor(private _data: DataTec,
        private _service: AlumnoService,
        private _router: Router,
        private _serviceActividades: ActividadesService,
        private _serviceExpedientes: ExpedientesService) {
    }

    ngOnInit() {
        this._service.currentAlumno.subscribe(alumno => this._alumno = alumno)
        this._dataCriterio = this._data.getDataTec()
        this._serviceActividades.currentActividad.subscribe(actividad => this._actividad = actividad)
        this._serviceExpedientes.currentExpediente.subscribe(data => this._expediente = data)
    }

    getAlumno() {
        return this._alumno
    }

    getActividad() {
        return this._actividad
    }

    dameValor(valor: any) {
        console.log(valor)
        // this._sumaTotal.push(valor)

        // console.log(this._sumaTotal)

        // let suma = 0
        // for (let i = 0; i < this._sumaTotal.length; i++) {
        //     this._resultado = suma += this._sumaTotal[i]
        //     if (this._resultado > 29) {
        //         this._activo = true
        //         this._resultado = 0
        //         this._sumaTotal = []
        //     }
        // }
    }

    calcular(event) {
        for (const ct of this._cts) {
            if (event.source.name === ct.name) {
                ct.value = event.value
            }
        }

        this.resultado = parseFloat((this._cts.reduce((total, cur) => total + cur.value, 0) / 7).toFixed(2))

        if (this.resultado >= 3.5) {
            this.desemp = 'EXCELENTE'
        }
        if (this.resultado >= 2.5 && this.resultado <= 3.49) {
            this.desemp = 'NOTABLE'
        }
        if (this.resultado >= 1.5 && this.resultado <= 2.49) {
            this.desemp = 'BUENO'
        }
        if (this.resultado >= 1 && this.resultado <= 1.49) {
            this.desemp = 'SUFICIENTE'
        }

        if (this.resultado <= 0.99) {
            this.desemp = 'INSUFICIENTE'
        }

    }

    limpiarCalculo() {
        this._activo = false
    }

    enviaForm() {
        this._expediente.noOficio = '0788/2020'
        this._expediente.calificacion = this._resultado
        this._expediente.fechaExpedicion = new Date()
        this._serviceExpedientes.putExpediente(this._expediente, this._expediente.id).subscribe()


        // this._router.navigate(['/expedientes'])
        // this._service.getFormulario(this.formulario, this._resultado)
    }
}
