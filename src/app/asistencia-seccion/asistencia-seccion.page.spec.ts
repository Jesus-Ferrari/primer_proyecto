import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaSeccionPage } from './asistencia-seccion.page';

describe('AsistenciaSeccionPage', () => {
  let component: AsistenciaSeccionPage;
  let fixture: ComponentFixture<AsistenciaSeccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaSeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
