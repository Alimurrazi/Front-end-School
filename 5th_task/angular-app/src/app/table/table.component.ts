import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
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
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore) {
    //  this.persons = db.collection('persons').valueChanges();
    //  console.log(db.collection('persons').valueChanges());
    //  console.log(this.persons);
  }

  ngOnInit() {
    this.db.collection<any>('persons').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      //  this.dataSource = this.ELEMENT_DATA;
      console.log(data);
      console.log(this.dataSource);
      //  return this.dataSource;
    })
  }

}
     