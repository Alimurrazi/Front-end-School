import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { FireBaseService } from './fire-base.service';

//const settings = { timestampsInSnapshots: true };
const config = {
  apiKey: "AIzaSyAdHayGyteu5fm85S4u1R7iojwBmhyUhBw",
  authDomain: "bijoy-4e976.firebaseapp.com",
  databaseURL: "https://bijoy-4e976.firebaseio.com",
  projectId: "bijoy-4e976",
  storageBucket: "bijoy-4e976.appspot.com",
  messagingSenderId: "787358691304"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-firebase';
  totalPerson:any = "*";
  
  constructor (){
   // this.totalPerson = firebase.totalPerson;
  }
  ngOnInit() {
    firebase.initializeApp(config);
  //  firebase.firestore().settings(settings);
  }
}
