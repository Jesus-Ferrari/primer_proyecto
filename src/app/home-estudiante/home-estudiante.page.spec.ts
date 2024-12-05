import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEstudiantePage } from './home-estudiante.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from 'src/app/storage.service'; 

describe('HomeEstudiantePage', () => {
  let fixture: ComponentFixture<HomeEstudiantePage>;
  let component: HomeEstudiantePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), 
        HttpClientTestingModule, 
        HomeEstudiantePage
      ],
      providers: [
        { provide: StorageService, useValue: jasmine.createSpyObj('StorageService', ['get', 'set', 'remove']) } 
        
      ]
    }).compileComponents(); 

    fixture = TestBed.createComponent(HomeEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existencia de la pagina home-estudiante', () => {
    expect(component).toBeTruthy();
  });
});
