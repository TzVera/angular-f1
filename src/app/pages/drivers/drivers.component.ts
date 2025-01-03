// TypeScript Pilotos

import { Component, OnInit } from '@angular/core';
import { DriversService } from './drivers.service';

@Component({
  selector: 'app-drivers',
  imports: [],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})

export class DriversComponent implements OnInit {

  // Declaración de variables
  drivers: any = [];
  isLoading: boolean = true;
  error: string = '';

  // Constructor
  constructor(private driversService: DriversService) {}

  ngOnInit() {
    // Caso exitoso de obtención de datos de API Pilotos
    this.isLoading = true
    this.driversService.getDrivers().then(response => {
      this.drivers = response.data
      this.isLoading = false
    })
    // Caso de error en obtención de datos de API Pilotos
    .catch ((Error) => {
      this.isLoading = false
      this.error = "Un error ocurrió en el fetching de datos"
      console.log('Mensaje de error:', Error)
    })
    
    console.log(this.drivers)

  }

}
