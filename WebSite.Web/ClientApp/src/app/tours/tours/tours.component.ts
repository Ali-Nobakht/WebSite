import { Component, OnInit } from '@angular/core';
import {TourService} from "../tour.service";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: {Id:number,RecordStatusId:number ,Title: string, Description: string }[] = []

    constructor(private tourService: TourService) {
 
    }
 
    ngOnInit() {
        this.tours = this.tourService.tours;
     
    }

}
