import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  personForm: FormGroup;
  FirstName:string = '';
  LastName:string = '';
  id:string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private db: AngularFirestore) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required]
    });
  }

  onFormSubmit(form) {

    const person = {
      FirstName: form.FirstName,
      LastName:  form.LastName,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
    }
    this.db.collection('Persons').doc(person.id).set(person);

    this.router.navigate(['']);
  }

}
