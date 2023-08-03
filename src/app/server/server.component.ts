import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
        .offline{
            color:yellow;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
        this.serverId = Math.floor(Math.random() * 1000);
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getClass(){
        return this.getServerStatus()==='Online'?'online':'offline';
    }
}