import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  serverName: string = '';
  serverContent: string = '';
  serverList = [];

  @Input('initS') initServer = {name: "روکسو", content: "این سرور باید به کامپوننت والد ارسال شود"};

  @Output() localServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //@Output() externalServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>()

  @Output('exServerCreated') externalServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  constructor() {
  }


  ngOnInit() {
  }

  onCreateLocalServer() {
      this.localServerCreated.emit({
          serverName: this.serverName,
          serverContent: this.serverContent
      });
  }

  onCreateExternalServer() {
      this.externalServerCreated.emit({
          serverName: this.serverName,
          serverContent: this.serverContent
      });
  }
  
}
