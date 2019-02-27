import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

export interface DialogData {
  FirstName: string;
  LastName: string;
  id: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private db: AngularFirestore) { }

  ngOnInit() {
  }

  deletePerson() {
    this.db.collection('Persons').doc(this.data.id).delete();
    this.dialogRef.close();
  }

}