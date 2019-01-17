import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PersonDataService } from '../person-data.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
//  displayedColumns = ['FirstName', 'LastName', 'Email', 'Geneder', 'DOB', 'Email', 'Phone']
 
  displayedColumns = ['FirstName', 'LastName'];
  dataSource: MatTableDataSource<any>;

  constructor(private db: AngularFirestore) {
    //  this.persons = db.collection('persons').valueChanges();
    //  console.log(db.collection('persons').valueChanges());
    //  console.log(this.persons);
  }

  ngOnInit(){
    debugger;
    this.db.collection<any>('persons').valueChanges().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })
  }

  ngAfterViewInit(){
    debugger;
    this.db.collection<any>('persons').valueChanges().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })  
  }

}
