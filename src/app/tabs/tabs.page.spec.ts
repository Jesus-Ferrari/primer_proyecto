import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page'; 
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('TabsPage', () => {
  let fixture: ComponentFixture<TabsPage>;
  let component: TabsPage;

  beforeEach(async () => {
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    activatedRouteSpy.snapshot = { paramMap: of({ get: () => 'test-param' }) };

    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        TabsPage,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
  });

  it('Existencia de la pagina tabs', () => {
    expect(component).toBeTruthy();
  });
});
