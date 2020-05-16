import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SiglarRService {

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('https://localhost:5001/api/Chat',{
                                skipNegotiation: true,
                                transport: signalR.HttpTransportType.WebSockets
                              }).build();
                      //      debugger;
    this.hubConnection.start().then(()=>console.log('connection started'))
                      .catch(err=>console.log('err: ' + err));
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      //this.data = data;
      console.log(data);
    });
  }


  constructor() { }
}
