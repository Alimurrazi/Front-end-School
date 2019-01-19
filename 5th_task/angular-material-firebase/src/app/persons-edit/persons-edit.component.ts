import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FireBaseService } from '../fire-base.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons-edit',
  templateUrl: './persons-edit.component.html',
  styleUrls: ['./persons-edit.component.css']
})
export class PersonsEditComponent implements OnInit {
  
  personForm: FormGroup;
  FirstName:string = '';
  LastName:string = '';
  id:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private firebase: FireBaseService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required]
    });
  }

  getBoard(id) {
    this.firebase.getPerson(id).subscribe(data => {
      this.id = data.key;
      this.personForm.setValue({
        FirstName: data.FirstName,
        LastName: data.LastName
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.firebase.updatePerson(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/persons']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  personsDetails() {
    this.router.navigate(['/persons-details', this.id]);
  }

}
