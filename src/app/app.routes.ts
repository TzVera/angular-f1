// Rutas de la app

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "drivers", component: DriversComponent },
    { path: "contact", component: ContactComponent }
]

@NgModule (
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutesModule {}
