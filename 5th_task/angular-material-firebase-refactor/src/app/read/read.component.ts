import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, AfterViewInit {
  
  displayedColumns = ['FirstName','LastName','edit','delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore, public dialog: MatDialog) { }

  openDialog(person): void{
    console.log(person);
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
    //  width: '250px',
      data: person
    })
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    this.db.collection<any>('Persons').valueChanges().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }



}
