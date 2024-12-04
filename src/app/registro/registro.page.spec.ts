import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page'; // Asegúrate de que RegistroPage esté importado
import { StorageService } from 'src/app/storage.service'; // Asegúrate de importar StorageService
import { Storage } from '@ionic/storage-angular'; // Asegúrate de que la ruta de Storage sea correcta
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs'; // Importamos `of` para crear un observable

describe('RegistroPage', () => {
  let fixture: ComponentFixture<RegistroPage>;
  let component: RegistroPage;

  beforeEach(async () => {
    // Crear un mock de Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    // Crear el TestBed con los proveedores necesarios
    await TestBed.configureTestingModule({
      imports: [
        RegistroPage, // Asegúrate de que RegistroPage esté correctamente importado
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService, // Servicio dependiente de StorageService
        { provide: Storage, useValue: storageSpy }, // Mock de Storage
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente fue creado correctamente
  });
});
