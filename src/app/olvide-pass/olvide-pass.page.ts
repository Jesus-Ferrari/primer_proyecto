import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule, AlertController, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-olvide-pass',
  templateUrl: './olvide-pass.page.html',
  styleUrls: ['./olvide-pass.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class OlvidePassPage {

  @ViewChild ('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild ('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;

  private buttonAnimation!: Animation
  private button2Animation!: Animation

  passwordForm! : FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private alertController:AlertController, private animationCtrl:AnimationController) {

    this.passwordForm = this.fb.group({
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
      passwordconfirm: [
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

   



   ionViewWillEnter() {
    if(this.button?.nativeElement && this.button2?.nativeElement) {
      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.buttonAnimation.play()
      this.button2Animation.play()
    }
   }

  ngAfterViewInit() {
    if(this.button?.nativeElement && this.button2?.nativeElement) {
      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.buttonAnimation.play()
      this.button2Animation.play()
    }
  }

  VolverAlLogin() {
    this.router.navigate(['login'])
  }

  async CambiarPassword() {
    if(this.passwordForm.valid) {
      const username = this.passwordForm.get('username')?.value;
      const password = this.passwordForm.get('password')?.value;
      const typeuser = this.passwordForm.get('typeuser')?.value;
      const passwordconfirm = this.passwordForm.get('passwordconfirm')?.value;
      const alertconfirm = await this.alertController.create({
        header: 'Confirmación',
        message: 'Se ha enviado un correo de confirmación para el cambio de tu contraseña.',
        buttons: ['OK']
      })
      const alertError = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      })

      if (passwordconfirm === password) {
        await alertconfirm.present();
        this.router.navigate(['login'])
      } else {
        await alertError.present();
        console.error('Las contraseñas no coinciden')
      }
      
    } else {
      console.error('Formulario Erroneo')
    }
  }

}
