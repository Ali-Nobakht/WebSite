import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
name : string;
names : string[];
serverCreationStatus : string="تور بزرگ";
allowNewServer: boolean = false;
serverCreation :boolean=false;
serverContent: string = '';


changeServerList = {name: "roxoChanges", content: "مکان این سرور تغییر کرده است"};
    serverDataFromChild = [];
 
    onLocalServerAdded(localServerData: {serverName: string, serverContent: string}) {
        this.serverDataFromChild.push({
            name: localServerData.serverName,
            content: localServerData.serverContent
        })
    }
 
    onExternalServerAdded(externalServerData: {serverName: string, serverContent: string}) {
        this.serverDataFromChild.push({
            name: externalServerData.serverName,
            content: externalServerData.serverContent
        })
    }


  constructor() {
    
   this.name="Ali";
   this.names=["Ali","Arash","Mehdi","Hossein","Mohsen"];

     setTimeout(()=>{
        this.allowNewServer = true;
        this.serverCreation=true;
    }, 2000);
   }
   
  ngOnInit() {
  }

  OnCreateServer(){
    this.serverCreationStatus = 'تور جدید با موفقیت ایجاد شد';
}
onUpdateServerName(event: Event) {
  this.name = (<HTMLInputElement>event.target).value;
}

getColor() {
  return this.allowNewServer ? "green" : "red";
}
}
