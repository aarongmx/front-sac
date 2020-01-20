import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tec2Component } from './tec2.component';

describe('Tec2Component', () => {
    let component: Tec2Component;
    let fixture: ComponentFixture<Tec2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tec2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Tec2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
