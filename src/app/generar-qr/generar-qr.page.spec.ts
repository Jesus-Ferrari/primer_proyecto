import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerarQrPage } from './generar-qr.page';

describe('GenerarQrPage', () => {
  let component: GenerarQrPage;
  let fixture: ComponentFixture<GenerarQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P1: Creacion exitosa del componente', () => {
    expect(component).toBeTruthy();
  });

  it('P2: Valor inicial de qrData', () => {
    expect(component.qrData).toBe('Fecha de clases ');
  });
});
