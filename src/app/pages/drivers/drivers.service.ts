// Service Pilotos

import { Injectable } from "@angular/core";
import axios from 'axios';

@Injectable ({
    providedIn: 'root'
})

export class DriversService {

    constructor() { }

    // Obtener datos API Pilotos con Axios
    getDrivers(){
        return axios.get('https://api.openf1.org/v1/drivers?session_key=9601')
    }

}
