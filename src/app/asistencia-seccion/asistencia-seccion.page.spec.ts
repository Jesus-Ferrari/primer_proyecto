import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaSeccionPage } from './asistencia-seccion.page';
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AsistenciaSeccionPage', () => {
  let fixture: ComponentFixture<AsistenciaSeccionPage>;
  let component: AsistenciaSeccionPage;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        AsistenciaSeccionPage,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaSeccionPage);
    component = fixture.componentInstance;
  });

  it('Existencia de la pagina asistencia-seccion', () => {
    expect(component).toBeTruthy();
  });
});
