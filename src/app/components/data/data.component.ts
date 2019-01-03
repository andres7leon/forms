import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

	forma:FormGroup;

	usuario:Object = {
		nombrecompleto: {
			nombre: 'andres',
			apellido: 'leon'
		},
		correo:'andres@gmail.com',
		//pasatiempos:["correr","dormir","jugar"]
	}

  	constructor() { 

  		console.log("this.usuario",this.usuario)

  		this.forma = new FormGroup({
  			'nombrecompleto': new FormGroup({
	  			'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
	  			'apellido': new FormControl('', Validators.required)  				
  			}),
  			'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
  			'pasatiempos': new FormArray([
  					new FormControl('Correr', Validators.required)
  				])

  		});

  	}

  	ngOnInit() {
  	}

  	guardarCambios(){
  		console.log(this.forma.value);

  		this.forma.reset({
  			nombrecompleto:{
  				nombre:'',
  				apellido: ''
  			},
  			correo: ''
  		})
  	}

  	agregarPasatiempo(){
  		(<FormArray>this.forma.controls['pasatiempos']).push(
  			new FormControl('', Validators.required )
  		)
  	}

}
