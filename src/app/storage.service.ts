import { Injectable } from '@angular/core';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  datos:any[] = [];
  dato:any={};
  private storage:Storage | null= null;

  constructor( private storageInstance:Storage) { 
    this.init()
  }

  async init() {
    const storage = await this.storageInstance.create();

    if(!this.storage) {
      this.storage = await this.storageInstance.create();
    }
  }

  async obtenerDato(key:string, identificador:string) {
    this.datos = await this.storage?.get(key) || [];
    this.dato = this.datos.find(valor=> valor.identificador == identificador)
    return this.dato;
  }

  async CrearUsuarioNuevo (key:string, jsonCrearUsuarioNuevo:any) {

    this.datos = await this.storage?.get(key) || [];
    let existe = await this.obtenerDato(key, jsonCrearUsuarioNuevo.identificador)

    if(existe == undefined) {
      this.datos.push(jsonCrearUsuarioNuevo)
      await this.storage?.set(key, this.datos)
      return true;
    } else {
      return false;
    }

  }

  async CrearSeccionNueva (key:string, jsonCrearSeccionNueva:any) {

    this.datos = await this.storage?.get(key) || [];
    let existe = await this.obtenerDato(key, jsonCrearSeccionNueva.identificador)

    if(existe == undefined) {
      this.datos.push(jsonCrearSeccionNueva)
      await this.storage?.set(key, this.datos)
      return true;
    } else {
      return false;
    }

  }

  async obtenerDatos(key:string) {
    if(!this.storage) {
      throw new Error('Storage no esta inicializado')
    }
    this.datos = await this.storage.get(key) || [];
    return this.datos;
  }

  async eliminar(key:string, identificador:string) {
    this.datos = await this.storage?.get(key) || [];
    this.datos.forEach((valor, indice) => {
      if(valor.identificador == identificador) {
        this.datos.splice(indice, 1)
      }
    });

    await this.storage?.set(key, this.datos)
  }

  async modificar(key:string, jsonModificado:any) {
    this.datos = await this.storage?.get(key) || [];
    let indice = this.datos.findIndex(valor => valor.identificador == jsonModificado.identificador)
    this.datos[indice]=jsonModificado;

    await this.storage?.set(key, this.datos)
  }
}
