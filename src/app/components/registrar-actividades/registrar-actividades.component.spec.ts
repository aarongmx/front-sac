import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarActividadesComponent } from './registrar-actividades.component';

describe('RegistrarActividadesComponent', () => {
  let component: RegistrarActividadesComponent;
  let fixture: ComponentFixture<RegistrarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
