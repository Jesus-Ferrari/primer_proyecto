import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, QRCodeModule]
})
export class GenerarQrPage implements OnInit {

  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;

  private buttonAnimation!: Animation
  private button2Animation!: Animation

  constructor(private router:Router, private animationCtrl:AnimationController) { }

  qrData:string='Fecha de clases ';
  createdCode:string='';

  seccionSeleccionada: any;

  async ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
  
    if (navigation && navigation.extras.state) {
      this.seccionSeleccionada = navigation.extras.state['seccionSeleccionada'];
      console.log('Sección seleccionada en GenerarQrPage:', this.seccionSeleccionada);
    } else {
      console.error('No se recibieron datos desde asistencia-seccion.');
    }
  }
  


  generateQRCode() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    this.createdCode = `${this.qrData} - ${formattedDate} - Sección: ${this.seccionSeleccionada?.nombreSeccion} (${this.seccionSeleccionada?.siglaSeccion})`;
  }
  

  VolverAlListadoAlumn() {
    this.router.navigate(['asistencia-seccion'])
  }

  ngAfterViewInit() {
    if (this.button?.nativeElement && this.button2?.nativeElement) {
      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.buttonAnimation.play();
      this.button2Animation.play();
    }
  }

  ionViewWillEnter() {
    if (this.button?.nativeElement && this.button2?.nativeElement) {
      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.buttonAnimation.play();
      this.button2Animation.play();
    }
  }

}
