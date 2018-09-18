import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { TourService } from "../tour.service";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  tour: { Id: number, RecordStatusId: number, Title: string, Description: string }

  titleTour = '';
  descTour = '';
  constructor(private tourService: TourService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
 
    if(id==undefined)
    return false;

  //  this.tour = this.tourService.getTour(id);

  //  this.titleTour = this.tour.Title;
 //   this.descTour = this.tour.Description;
 
  }

  onCreateTour(accountName: string, accountStatus: string) {
  //  this.tourService.addTour(accountName, accountStatus);

  }
}