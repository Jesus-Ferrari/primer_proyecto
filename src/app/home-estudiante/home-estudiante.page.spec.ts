import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEstudiantePage } from './home-estudiante.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Simula servicios HTTP
import { StorageService } from 'src/app/storage.service'; // Ajusta la ruta si es necesario

describe('HomeEstudiantePage', () => {
  let fixture: ComponentFixture<HomeEstudiantePage>;
  let component: HomeEstudiantePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), // Configuración para Ionic
        HttpClientTestingModule, // Simula servicios HTTP si los hay
        HomeEstudiantePage // IMPORTA HomeEstudiantePage porque es standalone
      ],
      providers: [
        { provide: StorageService, useValue: jasmine.createSpyObj('StorageService', ['get', 'set', 'remove']) } 
        // Mock del servicio StorageService
      ]
    }).compileComponents(); // Compila el entorno de pruebas

    fixture = TestBed.createComponent(HomeEstudiantePage); // Crea el componente
    component = fixture.componentInstance; // Instancia del componente
    fixture.detectChanges(); // Detecta cambios en el DOM
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente exista
  });
});
