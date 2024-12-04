import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminseccionPage } from './adminseccion.page';

describe('AdminseccionPage', () => {
  let component: AdminseccionPage;
  let fixture: ComponentFixture<AdminseccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminseccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
