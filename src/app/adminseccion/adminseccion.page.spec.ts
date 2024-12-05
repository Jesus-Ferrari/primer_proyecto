import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminseccionPage } from './adminseccion.page';
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('AdminseccionPage', () => {
  let fixture: ComponentFixture<AdminseccionPage>;
  let component: AdminseccionPage;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        AdminseccionPage,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminseccionPage);
    component = fixture.componentInstance;
  });

  it('Existencia de la pagina admin seccion', () => {
    expect(component).toBeTruthy();
  });
});
