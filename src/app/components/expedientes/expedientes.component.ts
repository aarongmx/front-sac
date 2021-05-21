import { Router } from '@angular/router'
import { Actividades } from './../../models/actividades'
import { AlumnoService } from './../../services/alumno.service'
import { ActividadesService } from './../../services/actividades.service'
import { Expedientes } from './../../models/expedientes'
import { ExpedientesService } from './../../services/expedientes.service'
import { Component, OnInit } from '@angular/core'
import { Alumnos } from 'src/app/models/alumnos'
import Docxtemplater from 'docxtemplater/js/docxtemplater'
import * as moment from 'moment'
import 'moment/locale/es'
import * as PizZip from 'pizzip/es6'
import * as JSZipUtils from 'jszip-utils/lib'
import * as FileSaver from 'file-saver/src/FileSaver'

@Component({
    selector: 'app-expedientes',
    templateUrl: './expedientes.component.html',
    styleUrls: ['./expedientes.component.scss']
})
export class ExpedientesComponent implements OnInit {

    private _expedientes: any[]
    private _actividades: Actividades[]
    private _expedienteAlumno: Expedientes
    private _alumno: Alumnos

    constructor(
        private _service: ExpedientesService,
        private _actividadesService: ActividadesService,
        private _alumnosService: AlumnoService,
        private _router: Router) { }

    ngOnInit() {
        this._alumnosService.currentAlumno.subscribe(alumno => this._alumno = alumno)
        this._service.getExpedientes().subscribe(data => this._expedientes = data
        )
        this._actividadesService.getActividades().subscribe(data => this._actividades = data)
        this._service.getExpedienteAlumno(this._alumno.noCtl).subscribe(data => this._expedienteAlumno = data)
    }

    getAlumno() {
        return this._alumno
    }

    getActividades() {
        return this._actividades
    }

    getActividad(id) {
        return this._actividades.find(act => {
            return act.id === id ? act : null
        })
    }

    getExpedienteAlumno() {
        return this._expedienteAlumno
    }

    downloadPDF(alumno: Alumnos, expediente: Expedientes, actividad: Actividades) {
        const { noCtl, nombres, apellidoPaterno, apellidoMaterno } = alumno
        const { fechaExpedicion, periodo, calificacion } = expediente

        const file = 'http://localhost:4200/assets/Formato.docx'
        JSZipUtils.getBinaryContent(file, function (err, ctn) {
            if (err) {
                throw err
            }

            const zip = new PizZip(ctn)
            const doc = new Docxtemplater().loadZip(zip)

            doc.setData({
                numero_documento: '0567/2020',
                nombre_alumno: `${nombres} ${apellidoPaterno} ${apellidoMaterno}`,
                numero_control: noCtl,
                carrera: 'Ingeniería en Sistemas Computacionales',
                tipo_actividad: 'CULTURAL',
                desemp: 'BUENO',
                valor_num: calificacion,
                periodo: periodo === 'E' ? 'Enero - Junio' : 'Agosto - Diciembre',
                credito: 1,
                fecha_expedicion: moment(fechaExpedicion).format('DD/MMMM/YYYY'),
                dia_exp: moment(fechaExpedicion).format('D'),
                mes_exp: moment(fechaExpedicion).format('MMMM'),
                year_exp: moment(fechaExpedicion).format('YYYY'),
                profesor: 'Juan Carlos Herrera Herrera'
            })

            try {
                doc.render()
            } catch (err) {
                const e = {
                    message: err.message,
                    name: err.name,
                    stack: err.stack,
                    properties: err.properties,
                }
                console.log(JSON.stringify({ error: e }))
                throw err
            }

            const out = doc.getZip().generate({
                type: 'blob',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            })

            FileSaver.saveAs(out, `${nombres} ${apellidoPaterno} ${apellidoMaterno}.docx`)
        })
    }

    registrarEvaluacion(expediente: Expedientes, alumno: Alumnos, actividad: Actividades) {
        this._service.changeExpediente(expediente)
        this._alumnosService.changeStudent(alumno)
        this._actividadesService.changeActividad(actividad)
        this._router.navigate(['/registrar-evaluacion'])
    }

    registrarAct(data) {
        this._service.postExpediente(this._alumno, data).subscribe(expediente => this._expedientes.push(expediente))
    }

}

