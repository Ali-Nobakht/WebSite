import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TourService, TourModel } from "../tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: TourModel;

  constructor(private tourService: TourService) {
  }

  ngOnInit() {

  }

  onDeleteTour(id: number) {
    this.tourService.remove(id).subscribe();
  }
}
