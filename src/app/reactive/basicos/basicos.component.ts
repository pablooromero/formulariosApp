import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  //COMO SE HARÍA CON EL FORM CONTROL
  /* miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('Iphone 13'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  }); */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['IPhone 13 pro'],
    precio: [1600],
    existencias: [3]
  })

  constructor( private formBuilder: FormBuilder ) { }

}
