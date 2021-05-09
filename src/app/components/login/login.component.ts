import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    planteles: number
    alumnos: number
    docentes: number
    forma: FormGroup
    constructor(private router: Router) {
        const obser = new Observable(observer => {
            let contador = 1
            const intervalo = setInterval(() => {
                contador += 1
                observer.next(contador)
                if (contador === 870) {
                    clearInterval(intervalo)
                    observer.complete()
                }
            }, 10)
        })

        obser.subscribe((dato: any) => {
            this.planteles = dato
            // console.log(this.planteles);
        })

        const obser2 = new Observable(observer => {
            let contador = 1
            const intervalo = setInterval(() => {
                contador += 1
                observer.next(contador)
                if (contador === 3170) {
                    clearInterval(intervalo)
                    observer.complete()
                }
            }, 3)
        })

        obser2.subscribe((dato: any) => {
            this.alumnos = dato
            console.log(this.alumnos)
        })

        const obser3 = new Observable(observer => {
            let contador = 1
            const intervalo = setInterval(() => {
                contador += 1
                observer.next(contador)
                if (contador === 30) {
                    clearInterval(intervalo)
                    observer.complete()
                }
            }, 400)
        })

        obser3.subscribe((dato: any) => {
            this.docentes = dato
        })
    }

    ngOnInit() {
        this.forma = new FormGroup({
            usuario: new FormControl(null),
            password: new FormControl(null),
        })
    }

    entrar() {
        console.log(this.forma.value)
        // Swal.fire({
        //     title: 'Has Ingresado al Sistema?',
        //     text: `Con el Usuario:  ${this.forma.value.usuario}?`,
        //     type: 'success'
        // })
        this.router.navigate(['/home'])
    }

}




