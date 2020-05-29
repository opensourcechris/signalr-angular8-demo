import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

  logs: string[] = [];
  logAdd: string;

  constructor(private logService: LogService) { }

  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:5001/signalr')
      .build();

    connection.start().then(() => console.log('SignalR hub connected!'))
      .catch(err => console.error(err));

    connection.on('logMessage', (message: string) => {
      console.log(message);
      this.logs.push(message);
    });
  }

  addLog() {
    console.log(this.logAdd);
    if (this.logAdd && this.logAdd.length > 0) {
      this.logService.addLog(this.logAdd).subscribe(() => {
        this.logAdd = '';
      });
    }
  }

}
