import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonCard, IonCardHeader, IonImg, IonCardTitle, IonCardContent, IonAccordionGroup, IonAccordion, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline } from 'ionicons/icons';
import { DatosService } from '../datos.service';
import { AnnadirCocheComponent } from '../annadir-coche/annadir-coche.component';
import { ModificarCocheComponent } from "../modificar-coche/modificar-coche.component";

@Component({
  selector: 'app-coche',
  templateUrl: './coche.page.html',
  styleUrls: ['./coche.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAccordion, IonAccordionGroup, IonCardContent, IonCardTitle, IonImg, IonCardHeader, IonCard, IonIcon, IonButton, AnnadirCocheComponent, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ModificarCocheComponent]
})
export class CochePage implements OnInit {
  coches: any[] = [];
  
  constructor(private datos: DatosService) {
    addIcons({closeCircleOutline});

    this.datos.getDatos().subscribe((data)=> {
      this.coches = data;
      console.log('Datos obtenidos de Firestore: ',data);
    })
  }

  eliminarDatos(id: string) {
    this.datos.eliminarDatos(id).then(() => {
      console.log('Coche eliminado con ID: ', id);
      // Actualizar el stock localmente
      this.coches = this.coches.filter(item => item.id !== id);
    }).catch((error) => {
      console.error('Error al eliminar coche: ', error);
    });
  }

  ngOnInit() {
  }

}
