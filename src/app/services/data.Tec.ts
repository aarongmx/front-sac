import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})


export class DataTec {

    data: any[] = [
        { No: '1', Criterio: 'Cumple en tiempo y forma con las actividades encomendadas alcanzando los objetivos', check: '' },
        { No: '2', Criterio: 'Trabaja en Equipo y se adapta a nuevas situaciones', check: '' },
        { No: '3', Criterio: 'Muestra liderazgo en las actividades encomendadas', check: '' },
        { No: '4', Criterio: 'Organiza su tiempo y trabaja de manera proactiva', check: '' },
        { No: '5', Criterio: 'Interpreta la realidad y se sensibiliza aportando soluciones a la problematica con la actividad complementaria', check: '' },
        { No: '6', Criterio: 'Realiza sugerencias innovadoras para beneficio o mejora del programa en el que participa', check: '' },
        { No: '7', Criterio: 'Tiene iniciativa para ayudar en las actividades encomendadas y muestra espiritu de servicio', check: '' }
    ];

    getDataTec() {
        return this.data
    }
}
