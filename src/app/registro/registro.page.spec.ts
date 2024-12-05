import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('RegistroPage', () => {
  let fixture: ComponentFixture<RegistroPage>;
  let component: RegistroPage;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        RegistroPage,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
  });

  it('Existencia de la pagina registro', () => {
    expect(component).toBeTruthy();
  });
});
