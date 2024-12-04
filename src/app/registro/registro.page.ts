import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { query } from '@angular/animations';
import { StorageService } from 'src/app/storage.service';

interface Persona {
  newname:string;
  newlastname:string;
  newusername:string;
  newpassword:string;
  newtypeuser:string;
  newcarrer:string;
  identificador:string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  @ViewChild('button', {read:ElementRef}) button?:ElementRef<HTMLImageElement>;
  @ViewChild('button2', {read:ElementRef}) button2?:ElementRef<HTMLImageElement>;
  @ViewChild('button3', {read:ElementRef}) button3?:ElementRef<HTMLImageElement>;
  @ViewChild('button4', {read:ElementRef}) button4?:ElementRef<HTMLImageElement>;

  private buttonAnimation!: Animation
  private button2Animation!: Animation
  private button3Animation!: Animation
  private button4Animation!: Animation

  username:any;
  typeuser:any;

  newname:string='';
  newlastname:string='';
  newusername:string='';
  newpassword:string='';
  newtypeuser:string='';
  newcarrer:string='';

  //VARIABLES CRUD
  personas:Persona[]=[];
  currentId:string="";

  constructor(private router:Router, private storageservice:StorageService, private animationCtrl:AnimationController) { }

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

  async CrearUsuarioNuevo() {
    const nuevaPersona={
      newname:this.newname,
      newlastname:this.newlastname,
      newusername:this.newusername,
      newpassword:this.newpassword,
      newtypeuser:this.newtypeuser,
      newcarrer:this.newcarrer,
      identificador:Date.now().toString()
    }

    this.personas.push(nuevaPersona);

    let resp = await this.storageservice.CrearUsuarioNuevo('personas', nuevaPersona)

    if (resp) {
      alert('Usuario nuevo creado');
      await this.listar();
    } else {
      alert('Error, no se pudo crear el usuario')
    }

    this.newname="";
    this.newlastname="";
    this.newusername="";
    this.newpassword="";
    this.newtypeuser="";
    this.newcarrer="";

  }

  async listar() {
    this.personas = await this.storageservice.obtenerDatos('personas') || [];
  }

  async buscar(id:any) {
    let registroEncontrado = await this.storageservice.obtenerDato('personas', id)
    if(registroEncontrado) {
      this.newname=registroEncontrado.newname;
      this.newlastname=registroEncontrado.newlastname;
      this.newusername=registroEncontrado.newusername;
      this.newpassword=registroEncontrado.newpassword;
      this.newtypeuser=registroEncontrado.newtypeuser;
      this.newcarrer=registroEncontrado.newcarrer;
      this.currentId = registroEncontrado.identificador;
    }
  }

  SalirAlLogin(){
    this.router.navigate(['login']);
  }

}
