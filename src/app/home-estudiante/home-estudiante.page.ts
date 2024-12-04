import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { query } from '@angular/animations';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.page.html',
  styleUrls: ['./home-estudiante.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ]
})
export class HomeEstudiantePage implements OnInit{

  @ViewChild('perfil', {read:ElementRef}) perfil?:ElementRef<HTMLImageElement>;
  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;

  private logoAnimation!: Animation
  private buttonAnimation!: Animation
  private button2Animation!: Animation

  constructor(private router:Router, private animationCtrl:AnimationController, private storageservice:StorageService) { }

  username: any;
  typeuser: any;
  name: any;
  lastname: any;
  carrer: any;

  personas: any[] = [];

  async ngOnInit() {

    const navigation = this.router.getCurrentNavigation();
  
    if (navigation && navigation.extras.state) {
      this.name = navigation.extras.state['newname'];
      this.lastname = navigation.extras.state['newlastname'];
      this.carrer = navigation.extras.state['newcarrer'];
      this.username = navigation.extras.state['newusername'];
      this.typeuser = navigation.extras.state['newtypeuser'];
    } else {
      alert('No se pudo establecer el state de Navigation');
    }

    this.personas = await this.storageservice.obtenerDatos('personas') || [];

  }
  
  ionViewWillEnter() {
    const navigation = this.router.getCurrentNavigation();

    if (this.perfil?.nativeElement && this.button?.nativeElement && this.button2?.nativeElement) {
      this.logoAnimation = this.animationCtrl.create()
      .addElement(this.perfil.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1');

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.logoAnimation.play();
      this.buttonAnimation.play();
      this.button2Animation.play();
    }


  } //fin del ionViewWillEnter

  ngAfterViewInit() {
    
    if (this.perfil?.nativeElement && this.button?.nativeElement && this.button2?.nativeElement) {
      this.logoAnimation = this.animationCtrl.create()
      .addElement(this.perfil.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1');

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.logoAnimation.play();
      this.buttonAnimation.play();
      this.button2Animation.play();
    }
  }

  async listar() {
    this.personas = await this.storageservice.obtenerDatos('personas') || [];
  }

  RegistrarAsistencia() {
    this.router.navigate(['registrar-asistencia'], {
      state: {
        name: this.name,
        lastname: this.lastname
      }
    });
  }
  

  SalirAlLogin(){
    this.router.navigate(['login']);
  }

}
