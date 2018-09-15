import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {




  @Input() tour: { Id:number,RecordStatusId:number ,Title: string, Description: string  }
  @Input() id: number;


  constructor(private tourService: TourService) {
  }

  ngOnInit() {
  }

  onSetTo(title: string) {
      this.tourService.updateTitle(this.id, title);
      this.tourService.titleUpdated.emit(title);
     // this.tourService.updateStatus(this.id, status);
    //  this.tourService.statusUpdated.emit(status);
  }

}
