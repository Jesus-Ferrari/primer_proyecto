import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Para manejar servicios HTTP si los hay
import { StorageService } from 'src/app/storage.service'; // Ajusta la ruta si es necesario

describe('LoginPage', () => {
  let fixture: ComponentFixture<LoginPage>;
  let component: LoginPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), // Configuración para Ionic
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule, // Simula servicios HTTP si son usados
        LoginPage // IMPORTA LoginPage directamente porque es standalone
      ],
      providers: [
        { provide: StorageService, useValue: jasmine.createSpyObj('StorageService', ['get', 'set']) } 
        // Mock del servicio StorageService
      ]
    }).compileComponents(); // Compila el entorno de pruebas

    fixture = TestBed.createComponent(LoginPage); // Crea el componente
    component = fixture.componentInstance; // Instancia del componente
    fixture.detectChanges(); // Detecta cambios en el DOM
  });

  it('P1: Existencia de la page Login', () => {
    expect(component).toBeTruthy(); // Verifica que el componente exista
  });
});
