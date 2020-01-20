import { Router } from '@angular/router';
import { PizZip, PizZipUtils } from 'pizzip'
import { Docxtemplater } from 'docxtemplater'
import { Component, OnInit } from '@angular/core'
import { TecService } from '../../services/tec.service'
import { Alumnos } from '../../models/alumnos'
import { Formulario } from '../../models/formulario'



@Component({
    selector: 'app-detalle',
    templateUrl: './generar-pdf.component.html',
    styleUrls: ['./generar-pdf.component.scss']
})

export class GenerarPDFComponent implements OnInit {
    alumno: Alumnos
    formulario: Formulario
    valorFinal: number
    constructor(private service: TecService,
        private router: Router) { }

    ngOnInit() {
        this.alumno = this.service.getAlumno()
        this.formulario = this.service.dameFormulario()
        this.valorFinal = this.service.dameResultadoRadio()
        console.log(this.alumno)
        console.log(this.formulario)
        console.log(this.valorFinal)
    }

    loadFile(url, callback) {
        PizZipUtils.getBinaryContent(url, callback)
    }
    generate() {
        // this.loadFile("https://docxtemplater.com/tag-example.docx", function (error, content) {
        //     if (error) { throw error };

        //     var zip = new PizZip(content)
        //     var doc = new Docxtemplater().loadZip(zip)
        //     doc.setData({
        //         first_name: 'John',
        //         last_name: 'Doe',
        //         phone: '0652455478',
        //         description: 'New Website'
        //     })
        //     try {
        //         // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        //         doc.render()
        //     }
        //     catch (error) {
        //         // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        //         // function replaceErrors(key, value) {
        //         //     if (value instanceof Error) {
        //         //         return Object.getOwnPropertyNames(value).reduce(function (error, key) {
        //         //             error[key] = value[key]
        //         //             return error
        //         //         }, {})
        //         //     }
        //         //     return value
        //         // }
        //         // console.log(JSON.stringify({ error: error }, replaceErrors))

        //         if (error.properties && error.properties.errors instanceof Array) {
        //             const errorMessages = error.properties.errors.map(function (error) {
        //                 return error.properties.explanation
        //             }).join("\n")
        //             console.log('errorMessages', errorMessages)
        //             // errorMessages is a humanly readable message looking like this :
        //             // 'The tag beginning with "foobar" is unopened'
        //         }
        //         throw error
        //     }
        //     var out = doc.getZip().generate({
        //         type: "blob",
        //         mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        //     }) //Output the document using Data-URI
        //     saveAs(out, "output.docx")
        // })
    }



    generarPDF(alumno: Alumnos) {
        console.log(alumno)

        // console.log('Vamos a imprimir el PDF')
        const URL = '../../../assets/Formato.docx'
        this.loadFile(URL, function (error, content) {
            if (error) {
                throw error
            }

            const zip = new PizZip(content)
            const doc = new Docxtemplater.loadZip(zip)

            doc.setData({

            })

            try {
                doc.render()
            } catch (error) {
                console.log(error)
            }

            const out = doc.getZip().generate({
                type: 'blob',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            })

            doc.saveAs(out, 'out.docx')

        })


        // swal.fire({
        //     title: 'Estas Seguro?',
        //     text: `¿Seguro que deseas generar el PDF al ${alumno.nombres} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}?`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Si',
        //     cancelButtonText: 'No'
        // }).then((result) => {
        //     if (result.value) {
        //         swal.fire(
        //             'Generado',
        //             'Se ha generado el PDF  correctamente',
        //             'success'
        //         )
        //         this.captureScreen(alumno)
        //         this.router.navigate(['/Tec'])
        //     } else if (result.dismiss === swal.DismissReason.cancel) {
        //         swal.fire(
        //             'Cancelado',
        //             'Se ha cancelado el PDF',
        //             'error'
        //         )
        //     }
        // })
    }
    // captureScreen(alumno: Alumnos) {
    //     const data = document.getElementById('contentToConvert')
    //     html2canvas(data).then(canvas => {
    //         // Few necessary setting options
    //         const imgWidth = 208
    //         const pageHeight = 295
    //         const imgHeight = canvas.height * imgWidth / canvas.width
    //         const heightLeft = imgHeight

    //         const contentDataURL = canvas.toDataURL('image/png')
    //         const pdf = new jspdf('p', 'mm', 'a4') // A4 size page of PDF
    //         const position = 0
    //         pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //         pdf.save(`${alumno.nombres} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}.pdf`) // Generated PDF
    //     })
    // }
}
