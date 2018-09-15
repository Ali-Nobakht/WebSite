import {Component, OnInit} from '@angular/core';
import {TourService} from "../tour.service";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {

  constructor( private tourService: TourService) {
  }

  ngOnInit() {
  }

  onCreateTour(accountName: string, accountStatus: string) {
      this.tourService.addTour(accountName, accountStatus);
      
  }
}