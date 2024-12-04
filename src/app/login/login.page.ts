import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule, AnimationController, Animation} from '@ionic/angular';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { query } from '@angular/animations';
import { UserService } from '../user.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit{

  loginForm! : FormGroup;

  @ViewChild('logo', {read:ElementRef}) logo?:ElementRef<HTMLImageElement>;
  @ViewChild('title', {read:ElementRef}) title?:ElementRef<HTMLImageElement>;
  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;

  private logoAnimation!: Animation
  private buttonAnimation!: Animation
  private button2Animation!: Animation

  constructor(private fb:FormBuilder, private router:Router, private animationCtrl:AnimationController, private retornoService:UserService , private storageservice:StorageService) { 

    this.loginForm = this.fb.group({

      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z0-9.-]*$'),
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z0-9.-]*$'),
        ]
      ],
      typeuser: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.-@]*$'),
        ]
      ],
    });
  }

  async OnLogin() {
    if(this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const typeuser = this.loginForm.get('typeuser')?.value;

      var respuesta: boolean= await this.retornoService.validaServicio(username, password, typeuser)

      if(respuesta) {
      const datos = await this.storageservice.obtenerDatos('personas');
      const persona = datos.find((dato: any) => dato.newusername === username);

      let newname: string | undefined;
      let newlastname: string | undefined;
      let newcarrer: string | undefined;

      if (persona) {
        newname = persona.newname; 
        newlastname = persona.newlastname;
        newcarrer = persona.newcarrer;
      }
        let navigationExtras:NavigationExtras={
          state: {
            newusername:username,
            newpassword:password,
            newtypeuser:typeuser,
            newname: newname,
            newlastname: newlastname,
            newcarrer: newcarrer
          }
        }

        if (typeuser === 'Docente') {
          this.router.navigate(['home'], navigationExtras);
        } else if (typeuser === 'Estudiante') {
          this.router.navigate(['home-estudiante'], navigationExtras);
        } else if (typeuser === 'Administrador'){
          this.router.navigate(['tabs'], navigationExtras);
        }
      } else {
        alert('Usuario, contraseña o Tipo de Usuario no válidos')
        console.error('Formulario Erroneo')
      }
      }
      
  }

  IrOlvidePass() {
    this.router.navigate(['olvide-pass'])
  }

  Registrarse(){
    this.router.navigate(['registro']);
  }

  ngOnInit() {
    this.loginForm.get('username')?.setValue('');
    this.loginForm.get('password')?.setValue('');
    this.loginForm.get('typeuser')?.setValue('');
  }

  ngAfterViewInit() {
    if (this.logo?.nativeElement && this.button?.nativeElement && this.button2?.nativeElement) {
      this.logoAnimation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1');

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')
      

      this.logoAnimation.play();
      this.buttonAnimation.play();
      this.button2Animation.play();
    }
  }

  ionViewWillEnter() {
    this.loginForm.get('username')?.setValue('');
    this.loginForm.get('password')?.setValue('');
    this.loginForm.get('typeuser')?.setValue('');

    if (this.logo?.nativeElement && this.button?.nativeElement && this.button2?.nativeElement) {
      this.logoAnimation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1');

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')
      

      this.logoAnimation.play();
      this.buttonAnimation.play();
      this.button2Animation.play();
    }

  }

}
