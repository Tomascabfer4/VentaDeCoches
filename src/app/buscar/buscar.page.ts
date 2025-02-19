import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonSelect, IonInput, IonSelectOption, IonCardContent, IonCardTitle, IonImg, IonCardHeader, IonCard, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuscarPage implements OnInit {
  coches: any[] = [];
  marcas: string[] = [];
  marcaSeleccionada: string = '';
  combustibles: string[] = [];
  combustibleSeleccionado: string = '';
  kilometrajeSeleccionado!: number;
  fechaSeleccionada!: number;

  constructor(private datos: DatosService) { 
    // Obtener los datos de Firebase
    this.datos.getDatos().subscribe((data) => {
      this.coches = data;
      console.log('Datos obtenidos de Firestore: ', data);
      
      // Extraer marcas y combustibles únicos
      this.marcas = [...new Set(this.coches.map(coche => coche.Marca))]; // Eliminar duplicados en marcas
      this.combustibles = [...new Set(this.coches.map(coche => coche.Combustible))]; // Eliminar duplicados en combustibles
    });
  }

  ngOnInit() {
  }

}
