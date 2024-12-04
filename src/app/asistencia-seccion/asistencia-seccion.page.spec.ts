import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaSeccionPage } from './asistencia-seccion.page'; // Asegúrate de que AsistenciaSeccionPage esté importado
import { StorageService } from 'src/app/storage.service'; // Asegúrate de importar StorageService
import { Storage } from '@ionic/storage-angular'; // Asegúrate de que la ruta de Storage sea correcta
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AsistenciaSeccionPage', () => {
  let fixture: ComponentFixture<AsistenciaSeccionPage>;
  let component: AsistenciaSeccionPage;

  beforeEach(async () => {
    // Crear un mock de Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    // Crear el TestBed con los proveedores necesarios
    await TestBed.configureTestingModule({
      imports: [
        AsistenciaSeccionPage, // Asegúrate de que AsistenciaSeccionPage esté correctamente importado
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService, // Servicio dependiente de StorageService
        { provide: Storage, useValue: storageSpy }, // Mock de Storage
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaSeccionPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente fue creado correctamente
  });
});
