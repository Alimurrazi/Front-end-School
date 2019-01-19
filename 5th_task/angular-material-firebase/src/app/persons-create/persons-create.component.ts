import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseService } from '../fire-base.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons-create',
  templateUrl: './persons-create.component.html',
  styleUrls: ['./persons-create.component.css']
})
export class PersonsCreateComponent implements OnInit {
  
  personForm: FormGroup;
  FirstName:string = '';
  LastName:string = '';

  constructor(private router: Router, private firebase: FireBaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.firebase.postPerson(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/persons-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
