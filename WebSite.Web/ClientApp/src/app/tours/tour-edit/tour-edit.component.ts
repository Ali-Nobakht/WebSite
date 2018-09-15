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

  onCreateAccount(accountName: string, accountStatus: string) {
      this.tourService.addAccount(accountName, accountStatus);
      
  }
}