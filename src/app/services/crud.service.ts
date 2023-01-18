import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';
import { Router } from "@angular/router";

export class Smartphone {
  $key: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(todo: Smartphone) {
    return this.ngFirestore.collection('technik').add(todo);
  }

  getTechniks() {
    return this.ngFirestore.collection('technik').snapshotChanges();
  }
  
  getTechnik(id) {
    return this.ngFirestore.collection('technik').doc(id).valueChanges();
  }

  delete(id: string) {
    this.ngFirestore.doc('technik/' + id).delete();
  }

}