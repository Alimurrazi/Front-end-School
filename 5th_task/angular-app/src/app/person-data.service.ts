import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(private db: AngularFirestore) { }

  getPerson(){
    return this.db.collection('persons').valueChanges();
  }

  addPerson(newPerson){
    this.db.collection('persons').add(newPerson).then(()=>{
      console.log("Done");
    })
  }
}
