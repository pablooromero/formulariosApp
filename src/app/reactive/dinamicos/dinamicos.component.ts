import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([], Validators.required)
  })

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: '',
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
