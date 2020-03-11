import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  changeStatus() {
    console.log('changin')
    this.allowNewServer = true;
  }


  constructor() { 
    setTimeout(() => {
      this.changeStatus();
    },2000)
  }

  ngOnInit(): void {
    console.log('Init this shit');
  }

  serverCreationStatus = 'No Server was created!';
  onCreateServer() {
      this.serverCreationStatus = 'Server was created';
  }

}
