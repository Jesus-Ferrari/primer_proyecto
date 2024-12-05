import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { StorageService } from 'src/app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;

  beforeEach(async () => {
    const storageSpy = jasmine.createSpyObj('Storage', ['create', 'get', 'set', 'remove']);

    await TestBed.configureTestingModule({
      imports: [
        HomePage,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        StorageService,
        { provide: Storage, useValue: storageSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('Existencia de la pagina home', () => {
    expect(component).toBeTruthy();
  });
});
