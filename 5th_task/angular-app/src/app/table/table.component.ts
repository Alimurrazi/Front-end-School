import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PersonDataService } from '../person-data.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
//  displayedColumns = ['FirstName', 'LastName', 'Email', 'Geneder', 'DOB', 'Email', 'Phone']
  displayedColumns = ['FirstName', 'LastName']
  dataSource = new PersonDataSource(this.person);

  // persons: Observable<any[]>;
  constructor(db: AngularFirestore, private person: PersonDataService) {
    //  this.persons = db.collection('persons').valueChanges();
    //  console.log(db.collection('persons').valueChanges());
    //  console.log(this.persons);
  }

  ngOnInit() {
  }

}

export class PersonDataSource extends DataSource<any>{
  constructor(private person: PersonDataService) {
    super();
  }

  connect() {
    return this.person.getPerson();
  }

  disconnect() {

  }

}
