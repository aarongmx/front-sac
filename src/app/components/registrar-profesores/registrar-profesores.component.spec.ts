import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProfesoresComponent } from './registrar-profesores.component';

describe('RegistrarProfesoresComponent', () => {
  let component: RegistrarProfesoresComponent;
  let fixture: ComponentFixture<RegistrarProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
