import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../fire-base.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private firebase: FireBaseService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  deletePerson(){
    var id:string = this.firebase.personId;
    this.firebase.deletePerson(id)
    .subscribe(res =>{
      this.router.navigate(['/persons']);
    },(err)=>{
      console.log(err);
    })
    this.dialog.closeAll();
  }

}
