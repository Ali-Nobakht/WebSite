import { Component, OnInit } from '@angular/core';
import {TourService,TourModel} from "../tour.service";


@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  //tours: {Id:number,RecordStatusId:number ,Title: string, Description: string }[] = []
  tours: TourModel[] = []

    constructor(private tourService: TourService) {
 
    }
 
    ngOnInit() {
        this.tours = this.tourService.get();
       
     
    }

}
