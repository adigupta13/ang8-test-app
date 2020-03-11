import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  username = '';
  serverCreated=false;
  servers = ['Testserver', 'TestServer2'];

  changeStatus() {
    console.log('changin')
    this.allowNewServer = true;
  }

  resetUser() {
    this.username = '';
  }


  constructor() {
    setTimeout(() => {
      this.changeStatus();
    },2000)
  }

  ngOnInit(): void {
    console.log('Init this shit');
  }


  onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
