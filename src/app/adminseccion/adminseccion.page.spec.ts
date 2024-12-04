import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminseccionPage } from './adminseccion.page'; // Asegúrate de que AdminseccionPage esté importado
import { StorageService } from 'src/app/storage.service'; // Asegúrate de importar StorageService
import { Storage } from '@ionic/storage-angular'; // Asegúrate de que la ruta de Storage sea correcta
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs'; // Importamos `of` para crear un observable

describe('AdminseccionPage', () => {
  let fixture: ComponentFixture<AdminseccionPage>;
  let component: AdminseccionPage;

  beforeEach(async () => {
    // Crear un mock de Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    // Crear el TestBed con los proveedores necesarios
    await TestBed.configureTestingModule({
      imports: [
        AdminseccionPage, // Asegúrate de que AdminseccionPage esté correctamente importado
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService, // Servicio dependiente de StorageService
        { provide: Storage, useValue: storageSpy }, // Mock de Storage
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminseccionPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente fue creado correctamente
  });
});
