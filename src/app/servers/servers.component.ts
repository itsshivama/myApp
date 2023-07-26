import { Component, OnInit } from '@angular/core';

@Component({
  // selector:'[app-servers]',
  // selector:'.app-servers',
  selector: 'app-servers',
  // template:`
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatiionStatus = "Server is not yet created!";
  serverName = 'TestServer';
  username = "";

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){}

  onCreateServer(){
    this.serverCreatiionStatus = "Server is Created! Name of the Server is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.username='';
  }

}
