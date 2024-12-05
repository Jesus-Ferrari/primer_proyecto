import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAsistenciaPage } from './registrar-asistencia.page';

describe('RegistrarAsistenciaPage', () => {
  let component: RegistrarAsistenciaPage;
  let fixture: ComponentFixture<RegistrarAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existencia de la pagina registrar-asistencia', () => {
    expect(component).toBeTruthy();
  });
});
