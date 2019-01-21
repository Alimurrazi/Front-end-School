import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  
  personId:any;
  ref = firebase.firestore().collection('Persons');

  constructor() { }

  getPersons(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let persons = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          persons.push({
            key: doc.id,
            FirstName: data.FirstName,
            LastName: data.LastName
          });
        });
        observer.next(persons);
      });
    });
  }


getPerson(id: string): Observable<any> {
  return new Observable((observer) => {
    this.ref.doc(id).get().then((doc) => {
      let data = doc.data();
      observer.next({
        key: doc.id,
        FirstName: data.FirstName,
        LastName: data.LastName
      });
    });
  });
}

postPerson(data): Observable<any> {
  return new Observable((observer) => {
    this.ref.add(data).then((doc) => {
      observer.next({
        key: doc.id,
      });
    });
  });
}

updatePerson(id: string, data): Observable<any> {
  return new Observable((observer) => {
    this.ref.doc(id).set(data).then(() => {
      observer.next();
    });
  });
}

deletePerson(id: string): Observable<{}> {
  return new Observable((observer) => {
    this.ref.doc(id).delete().then(() => {
      observer.next();
    });
  });
}

}
