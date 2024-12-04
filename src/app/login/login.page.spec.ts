import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Configura el ambiente de prueba//
describe('LoginPage', () => {
  beforeEach(async()  => {
    await TestBed.configureTestingModule({
      imports: [

        ReactiveFormsModule,
        FormsModule,
        LoginPage

      ],
    }).compileComponents //FIn TestBed

  }) //Fin before

  // Prueba 1: Carge page Login//
  it('P1: Existencia de la page Login', ()  => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  }) //Fin it 1

});
