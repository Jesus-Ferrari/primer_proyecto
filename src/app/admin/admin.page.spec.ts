import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPage } from './admin.page'; // Asegúrate de que AdminPage esté importado
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular'; // Asegúrate de que la ruta de Storage sea correcta
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdminPage', () => {
  let fixture: ComponentFixture<AdminPage>;
  let component: AdminPage;

  beforeEach(async () => {
    // Crear un mock del Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        AdminPage, // Aquí importamos el componente Standalone en lugar de declararlo
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService, // Servicio dependiente de StorageService
        { provide: Storage, useValue: storageSpy }, // Mock de Storage
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la página fue creada
  });
});
