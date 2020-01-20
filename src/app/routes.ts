import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component';
import { RegistrarProfesoresComponent } from './components/registrar-profesores/registrar-profesores.component';
import { RegistrarActividadesComponent } from './components/registrar-actividades/registrar-actividades.component';
import { InformacionComponent } from './components/informacion/informacion.component'
import { ExpedientesComponent } from './components/expedientes/expedientes.component'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { RegistrarEvaluacionComponent } from './components/registrar-evaluacion/registrar-evaluacion.component'
import { Tec2Component } from './components/tec2/tec2.component'
import { GenerarPDFComponent } from './components/generar-pdf/generar-pdf.component'
import { LoginComponent } from './components/login/login.component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'informacion', component: InformacionComponent },
    { path: 'registrar-evaluacion', component: RegistrarEvaluacionComponent },
    { path: 'registrar-actividades', component: RegistrarActividadesComponent },
    { path: 'registrar-profesores', component: RegistrarProfesoresComponent },
    { path: 'registrar-alumnos', component: RegistrarAlumnoComponent },
    { path: 'expedientes', component: ExpedientesComponent },
    { path: 'instrucciones', component: Tec2Component },
    { path: 'generar-pdf', component: GenerarPDFComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: LoginComponent }
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes)
