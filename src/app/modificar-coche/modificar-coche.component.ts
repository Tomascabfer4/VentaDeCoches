import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent, IonItem, IonInput, IonButton, IonAlert} from '@ionic/angular/standalone';
import { DatosService } from '../datos.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modificar-coche',
  templateUrl: './modificar-coche.component.html',
  styleUrls: ['./modificar-coche.component.scss'],
  imports: [ IonAlert, IonButton, IonCard, IonCardHeader, IonCardTitle,  IonCardContent, IonItem, IonList, IonInput, FormsModule, CommonModule],
})
export class ModificarCocheComponent  implements OnInit {

  //cocheId es la variable definida en el coche.html que coge el valor del id del coche a modificar.
  @Input() cocheId!: string;

  precio: number = 0;
  kilometros: number = 0;

  elementosVacios(): boolean {
    return this.kilometros === 0 ||
    this.precio === 0 
  }

  //Se supone que cuando no hay valor en kilometros y precio debe aparecer una alert pero no funciona
  ejecutarBoton(): void {
    if (!this.elementosVacios()) {
      this.actualizarDatos();
    }
  }

  alertaBoton = ['Aceptar'];

  constructor(private datos: DatosService) { }

  ngOnInit() {}

  actualizarDatos() {
    if (!this.cocheId) {
      console.error('No se ha recibido un ID válido');
      return;
    }

    this.datos.modificarDatos(this.cocheId, {
      Precio: this.precio,
      Kilometros: this.kilometros
    })
    .then(() => console.log('Coche modificado'))
    .catch(error => console.error(error));
  }

}
