import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() account: { name: string, status: string }
  @Input() id: number;


  constructor(private tourService: TourService) {
  }

  ngOnInit() {
  }

  onSetTo(status: string) {
      this.tourService.updateStatus(this.id, status);
      this.tourService.statusUpdated.emit(status);
      // this.loggingService.logStatusChanged(status);
  }

}
