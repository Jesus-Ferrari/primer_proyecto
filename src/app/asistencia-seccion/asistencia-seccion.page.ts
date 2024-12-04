import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-asistencia-seccion',
  templateUrl: './asistencia-seccion.page.html',
  styleUrls: ['./asistencia-seccion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AsistenciaSeccionPage{

  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;
  @ViewChild('table', {read:ElementRef}) table?:ElementRef<HTMLImageElement>;

  private buttonAnimation!: Animation
  private button2Animation!: Animation
  private tableAnimation!: Animation

  seccionSeleccionada: any;

  constructor(private router:Router, private storageservice:StorageService, private animationCtrl:AnimationController) { }

  par_username : string = "";
  par_typeuser : string = "";

  personas: any[] = [];

  async ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.seccionSeleccionada = navigation.extras.state['seccionSeleccionada'];
    } else {
      console.error('No se encontró información de la sección seleccionada.');
    }
    const filtroUsuario = 'Estudiante'; // Ejemplo: puedes obtener este valor de alguna otra fuente
    
    // Obtén los datos almacenados
    const allPersonas = await this.storageservice.obtenerDatos('personas') || [];
  
    // Filtra por el tipo de usuario
    this.personas = allPersonas.filter(persona => persona.newtypeuser === filtroUsuario);
  }

  VolverAlListadoAsig() {
    this.router.navigate(['home'])
  }

  ngAfterViewInit() {
    if(this.button?.nativeElement && this.button2?.nativeElement && this.table?.nativeElement){
      this.buttonAnimation = this.animationCtrl.create()
      .addElement (this.button.nativeElement)
      .duration (1000)
      .fromTo ('transform', 'translateY(20px)', 'translateY(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement (this.button2?.nativeElement)
      .duration (1000)
      .fromTo ('transform', 'translateY(20px)', 'translateY(0)')

      this.tableAnimation = this.animationCtrl.create()
      .addElement (this.table.nativeElement)
      .duration (1000)
      .fromTo ('transform', 'translateY(20px)', 'translateY(0)')

      this.buttonAnimation.play();
      this.button2Animation.play();
      this.tableAnimation.play();
    }
  }

  ionViewWillEnter () {
    if(this.button?.nativeElement && this.button2?.nativeElement && this.table?.nativeElement){
      this.buttonAnimation = this.animationCtrl.create()
      .addElement (this.button.nativeElement)
      .duration (1000)
      .fromTo ('transform', 'translateY(20px)', 'translateY(0)')

      this.button2Animation = this.animationCtrl.create()
      .addElement (this.button2?.nativeElement)
      .duration (1000)
      .fromTo ('transform', 'translateY(20px)', 'translateY(0)')

      this.tableAnimation = this.animationCtrl.create()
      .addElement (this.table.nativeElement)
      .duration (1000)
      .fromTo ('transform', 'translateY(20px)', 'translateY(0)')

      this.buttonAnimation.play();
      this.button2Animation.play();
      this.tableAnimation.play();
    }
  }

  async listar() {
    this.personas = await this.storageservice.obtenerDatos('personas') || [];
  }

  GenerarQR() {
    this.router.navigate(['generar-qr'], {
      state: {
        seccionSeleccionada: this.seccionSeleccionada, // Pasar la sección seleccionada
      }
    });
  }
  

}
