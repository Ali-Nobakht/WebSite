import { Component, OnInit } from '@angular/core';
import {TourService} from "../tour.service";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  accounts: { name: string, status: string }[] = []
 
    constructor(private tourService: TourService) {
 
    }
 
    ngOnInit() {
        this.accounts = this.tourService.accounts;
        console.log('account update')
    }

}
