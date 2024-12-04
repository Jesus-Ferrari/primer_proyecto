import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular'; // Ajusta la ruta si es necesario

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    // Crear un mock del Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      providers: [
        UserService, // Servicio que estamos probando
        StorageService, // Servicio dependiente
        { provide: Storage, useValue: storageSpy } // Mock del Storage
      ]
    }).compileComponents();

    service = TestBed.inject(UserService); // Inyectar el servicio para pruebas
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio fue creado
  });
});

