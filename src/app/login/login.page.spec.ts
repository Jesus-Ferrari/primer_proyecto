import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { StorageService } from 'src/app/storage.service'; 

describe('LoginPage', () => {
  let fixture: ComponentFixture<LoginPage>;
  let component: LoginPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), 
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule, 
        LoginPage 
      ],
      providers: [
        { provide: StorageService, useValue: jasmine.createSpyObj('StorageService', ['get', 'set']) } 
        
      ]
    }).compileComponents(); 

    fixture = TestBed.createComponent(LoginPage); 
    component = fixture.componentInstance; 
    fixture.detectChanges();
  });

  it('Existencia de la page Login', () => {
    expect(component).toBeTruthy();
  });
});
