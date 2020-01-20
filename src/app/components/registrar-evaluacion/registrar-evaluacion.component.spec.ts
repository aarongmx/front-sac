import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEvaluacionComponent } from './registrar-evaluacion.component';

describe('Tec1Component', () => {
    let component: RegistrarEvaluacionComponent;
    let fixture: ComponentFixture<RegistrarEvaluacionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrarEvaluacionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrarEvaluacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
