import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FireBaseService } from '../fire-base.service';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  
  displayedColumns = ['FirstName','LastName'];
  dataSource = new PersonDataSource(this.firebase);

  constructor(private firebase: FireBaseService) { }

  ngOnInit() {
  }
}

export class PersonDataSource extends DataSource<any>{
  constructor(private firebase: FireBaseService){
    super();
  }
  connect(){
    return this.firebase.getPersons();
  }
  disconnect(){
    
  }
}
    