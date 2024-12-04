import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageservice:StorageService) { }

  async validaServicio(usuario: string, contrasena: string, tipoUsuario: string): Promise<boolean> {

    if (usuario == 'SuperAdmin' && contrasena == 'admin998877' && tipoUsuario == 'Administrador') {
      return true;
    }

    const datos = await this.storageservice.obtenerDatos('personas');
    const usuarioValido = datos.find((dato: any) =>
      dato.newusername === usuario && dato.newpassword === contrasena && dato.newtypeuser === tipoUsuario);

    return usuarioValido !== undefined;
  }
}
