import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo SignalR';
  name = 'chris';


  ngOnInit(): void {
    // const connection = new signalR.HubConnectionBuilder()
    //   .configureLogging(signalR.LogLevel.Information)
    //   .withUrl('https://localhost:5001/signalr')
    //   .build();

    // connection.start().then(() => console.log('SignalR hub connected!'))
    //   .catch(err => console.error(err));

    // connection.on('logMessage', (message: string) => {
    //   console.log(message);
    // });
  }
}
