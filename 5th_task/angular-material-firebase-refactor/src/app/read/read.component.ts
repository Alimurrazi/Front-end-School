import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, AfterViewInit {
  
  displayedColumns = ['FirstName','LastName','DOB','edit','delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    this.db.collection<any>('Persons').valueChanges().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }
  
  openDialog(person): void{
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      data: person
    })
  }

  addPerson(){
    this.router.navigate(['/person-create']);
  }

  updatePerson(personID){
    this.router.navigate(['/person-edit/', personID]);
  }

}
