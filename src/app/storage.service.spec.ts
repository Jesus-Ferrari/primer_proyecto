import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular'; // Ajusta la ruta si es necesario

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {
    // Crear un mock del Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      providers: [
        StorageService, // Servicio que estamos probando
        { provide: Storage, useValue: storageSpy } // Mock del Storage
      ]
    }).compileComponents();

    service = TestBed.inject(StorageService); // Inyectar el servicio para pruebas
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio fue creado
  });
});

