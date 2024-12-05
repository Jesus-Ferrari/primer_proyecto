import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      providers: [
        UserService,
        StorageService,
        { provide: Storage, useValue: storageSpy }
      ]
    }).compileComponents();

    service = TestBed.inject(UserService);
  });

  it('Existencia del servicio user.service', () => {
    expect(service).toBeTruthy();
  });
});

