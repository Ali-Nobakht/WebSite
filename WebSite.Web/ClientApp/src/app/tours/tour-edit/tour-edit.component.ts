import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { TourService, TourModel } from "../tour.service";

@Component({
    selector: 'app-tour-edit',
    templateUrl: './tour-edit.component.html',
    styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
    tour: TourModel;


    btnValue = 'ثبت';
    constructor(private tourService: TourService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        if (id == undefined || id == 0) {
            this.tour = {
              description:"",
              id:0,
              recordStatusId:1,
              title:""
            };
            return false;
        }
        this.btnValue = 'ویرایش';
        this.tourService.getTour(id).subscribe(data => {

            this.tour = data;

        });
        console.log(this.tour);


    }

    onSaveTour() {
      if(this.tour.id==0)
        this.tourService.add(this.tour).subscribe();
        else
        this.tourService.update(this.tour).subscribe();
    }
   

}
