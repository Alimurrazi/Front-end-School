import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-persons-deatail',
  templateUrl: './persons-deatail.component.html',
  styleUrls: ['./persons-deatail.component.css']
})
export class PersonsDeatailComponent implements OnInit {

  person = {};

  constructor(private route: ActivatedRoute, private router: Router, private firebase: FireBaseService ) { }
  
  ngOnInit() {
    this.getPersonDetails(this.route.snapshot.params['id']);
  }

  getPersonDetails(id){
    this.firebase.getPerson(id)
    .subscribe(data =>{
      console.log(data);
      this.person = data;
    })
  }

  deletePerson(id){
    this.firebase.deletePerson(id)
    .subscribe(res =>{
      this.router.navigate(['/persons']);
    },(err)=>{
      console.log(err);
    })
  }

}
