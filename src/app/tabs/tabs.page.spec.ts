import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page'; // Asegúrate de que TabsPage esté importado
import { ActivatedRoute } from '@angular/router'; // Asegúrate de que la ruta de ActivatedRoute sea correcta
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular'; // Asegúrate de que la ruta de Storage sea correcta
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs'; // Importamos `of` para crear un observable

describe('TabsPage', () => {
  let fixture: ComponentFixture<TabsPage>;
  let component: TabsPage;

  beforeEach(async () => {
    // Crear un mock del ActivatedRoute
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    activatedRouteSpy.snapshot = { paramMap: of({ get: () => 'test-param' }) };

    // Crear un mock del Storage
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        TabsPage, // Aquí importamos el componente Standalone
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService, // Servicio dependiente de StorageService
        { provide: Storage, useValue: storageSpy }, // Mock de Storage
        { provide: ActivatedRoute, useValue: activatedRouteSpy }, // Mock de ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la página fue creada
  });
});
