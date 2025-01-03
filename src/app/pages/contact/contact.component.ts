// TypeScript elementos del formulario

import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  contactForm: FormGroup

  // Constructor
  constructor(private fb: FormBuilder) {

    // Validaciones del formulario
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      age: ["", [Validators.required, Validators.min(5), Validators.max(130)]],
      email: ["", [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(30), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      country: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      message: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    })
  
  }

  // Función alert de formulario (notifica que los datos del formulario han sido enviados correctamente a través del submit del formulario)
  onSubmit() {
    if (this.contactForm.valid){
      console.log(this.contactForm.value)
      alert("Los datos han sido enviados")
      this.contactForm.reset()
    } 
  }

}