import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class HomePage {

  @ViewChild('table', {read:ElementRef}) table?:ElementRef<HTMLImageElement>;
  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;

  private tableAnimation!: Animation
  private buttonAnimation!: Animation

  constructor(private router:Router, private animationCtrl:AnimationController, private storageservice:StorageService) {}

  username: any;
  typeuser: any;
  name: any;
  lastname: any;
  carrer: any;

  secciones: any[] = [];

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
    
    this.secciones = await this.storageservice.obtenerDatos('secciones') || [];
  }

  mostrarTabla: boolean = false;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }

  async listar() {
    this.secciones = await this.storageservice.obtenerDatos('secciones') || [];
  }

  ionViewWillEnter () {
    if (this.table?.nativeElement && this.button?.nativeElement) {
      this.tableAnimation = this.animationCtrl.create()
      .addElement(this.table.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.tableAnimation.play();
      this.buttonAnimation.play();
    }
  }

  ngAfterViewInit() {
    if (this.table?.nativeElement && this.button?.nativeElement) {
      this.tableAnimation = this.animationCtrl.create()
      .addElement(this.table.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.buttonAnimation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateY(20px)', 'translateY(0)')

      this.tableAnimation.play();
      this.buttonAnimation.play();
    }
  }

  VolverAlLogin() {
    this.router.navigate(['login'])
  }

  IrAsistenciaSeccion(seccion: any) {
    this.router.navigate(['asistencia-seccion'], {
      state: {
        seccionSeleccionada: seccion
      }
    });
  }  

}


