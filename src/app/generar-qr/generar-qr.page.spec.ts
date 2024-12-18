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

  it('P3: Generación del código QR al pulsar un botón', () => {
    component.qrData = 'Prueba QR';
    component.seccionSeleccionada = { nombreSeccion: 'Sección A', siglaSeccion: 'SA' };
    component.generateQRCode();

    const formattedDate = new Date().toLocaleDateString();
    
    const expectedCode = `Prueba QR - ${formattedDate} - Sección: Sección A (SA)`;
    expect(component.createdCode).toBe(expectedCode);
  });

  it('P4: Verificar que el código QR no se muestra inicialmente', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('qrcode')).toBeNull();
  });

  it('P5: Actualización de createdCode al llamar a generateQRCode()', () => {
    component.qrData = 'Nuevo texto QR';
    component.seccionSeleccionada = { nombreSeccion: 'Sección B', siglaSeccion: 'SB' };
    component.generateQRCode();

    const formattedDate = new Date().toLocaleDateString();
    
    const expectedUpdatedCode = `Nuevo texto QR - ${formattedDate} - Sección: Sección B (SB)`;
    expect(component.createdCode).toBe(expectedUpdatedCode);
  });

});
