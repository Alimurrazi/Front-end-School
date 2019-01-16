import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  persons: Observable<any[]>;
  constructor(db: AngularFirestore){
     // this.persons = db.collection('persons').valueChanges();
      console.log(db.collection('persons').valueChanges());
      console.log(this.persons);
  }

  ngOnInit() {
  }

}
