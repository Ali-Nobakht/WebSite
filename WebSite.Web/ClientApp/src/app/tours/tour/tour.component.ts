import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService,TourModel} from "../tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {




  @Input() tour: TourModel;



  constructor(private tourService: TourService) {
   
  }
  ngOnChanges(){
   // console.log(this.tour);
  }
  ngOnInit() {

  }
  onUpdateTitle(event: Event){

  //  this.tourService.updateTitle(this.tour.Id, (<HTMLInputElement>event.target).value);
   
  }


  onSetTo(title: string) {
     // this.tourService.updateTitle(this.tour.Id, title);
     // this.tourService.titleUpdated.emit(title);
     // this.tourService.updateStatus(this.id, status);
    //  this.tourService.statusUpdated.emit(status);
  }
  onDeleteTour(id:number)
  {
this.tourService.remove(id).subscribe();
  }
}
