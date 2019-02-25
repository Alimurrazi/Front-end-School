import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  personForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  id: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private db: AngularFirestore, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.personForm = this.formBuilder.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required]
    });

    this.id = this.route.snapshot.params['id'];

    this.db.collection<any>('Persons', ref => ref.where('id', '==', this.id)).valueChanges().subscribe(data => {
      this.FirstName = data[0].FirstName;
      this.LastName =  data[0].LastName;
      console.log(this.FirstName+" "+this.LastName);
    })

  }

onFormUpdate(form)
{
  console.log(form);
}  

}
