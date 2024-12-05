import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy }
      ]
    }).compileComponents();

    service = TestBed.inject(StorageService); 
  });

  it('Existencia del servicio storage', () => {
    expect(service).toBeTruthy();
  });
});

