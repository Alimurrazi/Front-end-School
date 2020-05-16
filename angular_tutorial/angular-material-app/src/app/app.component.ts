import { Component } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { HttpClient } from '@angular/common/http';
import { SiglarRService } from './services/siglar-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-app';

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  hubConnection: signalR.HubConnection;

  constructor(private signalRservice: SiglarRService, private http: HttpClient){
    this.signalRservice.startConnection();
    this.signalRservice.addTransferChartDataListener();
    this.startHttpRequest();
  }

  showAnswer(){
    this.showSpinner = true;

    setTimeout(()=>{
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    },2000)
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/Chat')
      .subscribe(res => {
        console.log(res);
      })
  }
  sidebarIconToggle()
  {
     debugger;
  }

}
