import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPage } from './admin.page';
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdminPage', () => {
  let fixture: ComponentFixture<AdminPage>;
  let component: AdminPage;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        AdminPage,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPage);
    component = fixture.componentInstance;
  });

  it('Existencia de la pagina admin', () => {
    expect(component).toBeTruthy();
  });
});
