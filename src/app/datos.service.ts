import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private firestore: Firestore) { }

  getDatos(): Observable<any>{
    const ref = collection(this.firestore, 'Coches');
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }

  insertDatos(data: any): Promise<void> {
    const ref = collection(this.firestore, 'Coches');
    return addDoc(ref, data)
      .then(() => console.log('Datos insertados correctamente'))
      .catch((error) => console.error('Error al insertar datos:', error));
  }

  eliminarDatos(id: string): Promise<void> {
    const docRef = doc(this.firestore, `Coches/${id}`);
    return deleteDoc(docRef)
      .then(() => console.log('Coche eliminado con ID: ', id))
      .catch((error) => console.error('Error al eliminar coche:', error));
  }

  modificarDatos(id: string, nuevosDatos: any): Promise<void> {
    const docRef = doc(this.firestore, `Coches/${id}`);
    return updateDoc(docRef, nuevosDatos)
      .then(() => console.log('Coche actualizado con ID: ', id))
      .catch((error) => console.error('Error al actualizar coche:', error));
  }
 
}
