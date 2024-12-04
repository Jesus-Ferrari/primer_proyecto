import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { query } from '@angular/animations';
import { StorageService } from 'src/app/storage.service';

interface Seccion {
  nombreSeccion:string;
  siglaSeccion:string;
  jornada:string;
  identificador:string;
}

@Component({
  selector: 'app-adminseccion',
  templateUrl: './adminseccion.page.html',
  styleUrls: ['./adminseccion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminseccionPage implements OnInit {

  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;
  @ViewChild('button3', {read:ElementRef}) button3?:ElementRef<HTMLImageElement>;
  @ViewChild('button4', {read:ElementRef}) button4?:ElementRef<HTMLImageElement>;

  private buttonAnimation!: Animation
  private button2Animation!: Animation
  private button3Animation!: Animation
  private button4Animation!: Animation

  nombreSeccion:string = '';
  siglaSeccion:string = '';
  jornada:string = '';

  //VARIABLES CRUD
  secciones:Seccion[]=[];
  currentId:string="";

  constructor(private router:Router, private storageservice:StorageService, private animationCtrl:AnimationController) { 

  }

  async ngOnInit() {
    await this.storageservice.init();
    await this.listar();
  }

  ngViewAfterInit () {
    if ( this.button?.nativeElement && this.button2?.nativeElement && this.button3?.nativeElement && this.button4?.nativeElement) {

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button3Animation = this.animationCtrl.create()
      .addElement(this.button3.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button4Animation = this.animationCtrl.create()
      .addElement(this.button4.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.buttonAnimation.play();
      this.button2Animation.play();
      this.button3Animation.play();
      this.button4Animation.play();
    }
  }

  ionViewWillEnter() {
    if ( this.button?.nativeElement && this.button2?.nativeElement && this.button3?.nativeElement && this.button4?.nativeElement) {

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement(this.button2.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button3Animation = this.animationCtrl.create()
      .addElement(this.button3.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.button4Animation = this.animationCtrl.create()
      .addElement(this.button4.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translate(0)')

      this.buttonAnimation.play();
      this.button2Animation.play();
      this.button3Animation.play();
      this.button4Animation.play();
    }
  }

  async CrearSeccionNueva() {
    const nuevaSeccion={
      nombreSeccion:this.nombreSeccion,
      siglaSeccion:this.siglaSeccion,
      jornada:this.jornada,
      identificador:Date.now().toString()
    }

    this.secciones.push(nuevaSeccion);

    let resp = await this.storageservice.CrearSeccionNueva('secciones', nuevaSeccion)

    if (resp) {
      alert('Seccion nueva creada');
      await this.listar();
    } else {
      alert('Error, no se pudo crear la seccion')
    }

    this.nombreSeccion="";
    this.siglaSeccion="";
    this.jornada="";

  }

  mostrarTabla: boolean = false;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }

  async listar() {
    this.secciones = await this.storageservice.obtenerDatos('secciones') || [];
  }

  async eliminar(id:any) {
    await this.storageservice.eliminar('secciones', id);
    await this.listar();
  }

  async buscar(id:any) {
    let registroEncontrado = await this.storageservice.obtenerDato('secciones', id)
    if(registroEncontrado) {
      this.nombreSeccion=registroEncontrado.nombreSeccion;
      this.siglaSeccion=registroEncontrado.siglaSeccion;
      this.jornada=registroEncontrado.jornada;
      this.currentId = registroEncontrado.identificador;
    }
  }

  async modificar() {
    const seccionModificada: Seccion={
      nombreSeccion:this.nombreSeccion,
      siglaSeccion:this.siglaSeccion,
      jornada:this.jornada,
      identificador:this.currentId
    }

    await this.storageservice.modificar('secciones', seccionModificada);
    await this.listar();

    this.nombreSeccion="";
    this.siglaSeccion="";
    this.jornada="";
  }

  SalirAlLogin(){
    this.router.navigate(['login']);
  }

}
