import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController, AnimationController, Animation } from '@ionic/angular';
import { Router } from '@angular/router';
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegistrarAsistenciaPage implements OnInit, OnDestroy {

  @ViewChild('button', { read: ElementRef }) button?: ElementRef<HTMLImageElement>;
  @ViewChild('button2', { read: ElementRef }) button2?: ElementRef<HTMLImageElement>;

  private buttonAnimation!: Animation;
  private button2Animation!: Animation;

  name: string | undefined;
  lastname: string | undefined;

  constructor(private router: Router, private alertController: AlertController, private animationCtrl: AnimationController) { }

  scannerResult: string | null = null;
  scanHistory: Array<{ date: string, result: string }> = [];  // Arreglo para almacenar los resultados
  private html5QrCode: Html5QrcodeScanner | null = null;
  isCameraPermissionGranted: boolean = false;

  async ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.name = navigation.extras.state['name'];
      this.lastname = navigation.extras.state['lastname'];
    } else {
      alert('No se pudo recibir el estado de navegación');
    }
  }

  ngViewAfterInit() {
    if (this.button?.nativeElement && this.button2?.nativeElement) {
      this.buttonAnimation = this.animationCtrl.create()
        .addElement(this.button.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateY(20px)', 'translate(0)');

      this.button2Animation = this.animationCtrl.create()
        .addElement(this.button2.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateY(20px)', 'translate(0)');

      this.buttonAnimation.play();
      this.button2Animation.play();
    }
  }

  ionViewWillEnter() {
    if (this.button?.nativeElement && this.button2?.nativeElement) {
      this.buttonAnimation = this.animationCtrl.create()
        .addElement(this.button.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateY(20px)', 'translate(0)');

      this.button2Animation = this.animationCtrl.create()
        .addElement(this.button2.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateY(20px)', 'translate(0)');

      this.buttonAnimation.play();
      this.button2Animation.play();
    }
  }

  requestCameraPermission() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.isCameraPermissionGranted = true;
          this.startScanner();
        })
        .catch((error) => {
          alert("Error al solicitar los permisos de cámara");
        });
    } else {
      alert("Navegador no soporta el acceso a la cámara");
    }
  }

  startScanner() {
    const config = {
      fps: 10,
      qrbox: 250,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };
  
    this.html5QrCode = new Html5QrcodeScanner("reader", config, false);
    this.html5QrCode.render((result) => {
      // Detener el escaneo después de obtener el primer resultado
      this.html5QrCode?.clear();
  
      // Guardamos el resultado del escaneo
      this.scannerResult = result;
      console.log("Resultado del scanner", result);
  
      // Mostramos el historial con el nuevo resultado
      this.addToHistory(result);
  
      // Mostrar un mensaje de éxito con un botón de "OK"
      this.showScanSuccessAlert();
    }, (error) => {
      console.warn("Error al escanear el código QR", error);
    });
  }
  
  // Método para mostrar la alerta de éxito
  async showScanSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registro de asistencia exitoso',
      message: 'Ha quedado presente en la asignatura',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Reactivar el escáner para un nuevo escaneo
            this.requestCameraPermission(); // Solicitar permisos de nuevo si es necesario
          }
        }
      ]
    });
    await alert.present();
  }
  

  // Método para agregar el resultado al historial
  addToHistory(result: string) {
    const currentDate = new Date().toLocaleString();  // Obtener la fecha y hora actual
    this.scanHistory.unshift({ date: currentDate, result });  // Insertar al principio del arreglo
  }

  ngOnDestroy() {
    if (this.html5QrCode) {
      this.html5QrCode.clear();
    }
  }

  VolverAlHome() {
    this.router.navigate(['home-estudiante']);
  }
}
