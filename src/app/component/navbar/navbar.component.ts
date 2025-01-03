// TypeScript Barra de navegación 

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  
  isLogin = false

  // Función alert de barra de navegación (notifica cambio de la barra de navegación, visualizando el resto de la página)
  alertLogin(){
    if(this.isLogin){
      alert("Bienvenido a la página");
    } else{
      alert("Gracias por su visita");
    }
  }

}
