import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //COMO SE HARÍA CON EL FORM CONTROL
  /* miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('Iphone 13'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  }); */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [ Validators.min(0), Validators.required ] ],
    existencias: [ , [ Validators.min(0), Validators.required ] ]
  });

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'IPhone 12',
      precio: 1200,
      existencias: 25
    })
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }


  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
