import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTextarea, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/angular/standalone';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-annadir-coche',
  templateUrl: './annadir-coche.component.html',
  styleUrls: ['./annadir-coche.component.scss'],
  imports: [IonAlert,  IonButton, IonLabel, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonTextarea, CommonModule, FormsModule]
})
export class AnnadirCocheComponent  implements OnInit {

  marca: string = ''; 
  modelo: string = '';
  combustible: string = '';
  fecha: number = 0;
  kilometros: number = 0;
  precio: number = 0;
  foto: string = '';

  elementosVacios(): boolean {
    return this.marca === '' || 
    this.modelo === '' || 
    this.combustible === '' || 
    this.fecha === 0 ||
    this.kilometros === 0 ||
    this.precio === 0 ||
    this.foto === '';
  }

  ejecutarBoton(): void {
    if (!this.elementosVacios()) {
      this.insertarDatos();
    }
  }

  alertaBoton = ['Aceptar'];
  
  constructor(private datos: DatosService) { 
  }

  ngOnInit() {
  }

  insertarDatos() {
    const data = {
      Marca: this.marca,
      Modelo: this.modelo,
      Combustible: this.combustible,
      Fecha: this.fecha,
      Kilometros: this.kilometros,
      Precio: this.precio,
      Foto: this.foto
    };

    this.datos.insertDatos(data)
      .then(() => console.log('Datos insertados correctamente'))
      .catch((error) => console.error('Error al insertar datos:', error));

      this.marca = ''; 
      this.modelo = ''; 
      this.combustible = ''; 
      this.fecha = 0;
      this.kilometros = 0;
      this.precio = 0;
      this.foto = '';
    }

}
