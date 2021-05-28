import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegistrarEvaluacionComponent } from './components/registrar-evaluacion/registrar-evaluacion.component'
import { Tec2Component } from './components/tec2/tec2.component'
import { APP_ROUTES } from './routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { TecService } from './services/tec.service'
import { FiltroPipe } from './pipes/filtro.pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GenerarPDFComponent } from './components/generar-pdf/generar-pdf.component'
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './components/login/login.component'
import { InformacionComponent } from './components/informacion/informacion.component'
import { ExpedientesComponent } from './components/expedientes/expedientes.component'
import { RegistrarActividadesComponent } from './components/registrar-actividades/registrar-actividades.component'
import { RegistrarProfesoresComponent } from './components/registrar-profesores/registrar-profesores.component'
import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        RegistrarEvaluacionComponent,
        Tec2Component,
        FiltroPipe,
        GenerarPDFComponent,
        LoginComponent,
        InformacionComponent,
        ExpedientesComponent,
        RegistrarActividadesComponent,
        RegistrarProfesoresComponent,
        RegistrarAlumnoComponent,
    ],
    imports: [
        BrowserModule,
        APP_ROUTES,
        FormsModule,
        HttpClientModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        BrowserAnimationsModule
    ],
    providers: [
        TecService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
