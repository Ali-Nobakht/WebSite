import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {




  @Input() tour: { Id:number,RecordStatusId:number ,Title: string, Description: string  }



  constructor(private tourService: TourService) {
  }

  ngOnInit() {
  }
  onUpdateTitle(event: Event){

    this.tourService.updateTitle(this.tour.Id, (<HTMLInputElement>event.target).value);
   
  }


  onSetTo(title: string) {
      this.tourService.updateTitle(this.tour.Id, title);
     // this.tourService.titleUpdated.emit(title);
     // this.tourService.updateStatus(this.id, status);
    //  this.tourService.statusUpdated.emit(status);
  }

}
