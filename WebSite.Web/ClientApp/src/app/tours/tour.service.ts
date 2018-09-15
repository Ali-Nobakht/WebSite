import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class TourService {
    tours = [
        {
            Id: 1,
            RecordStatusId: 1,
            Title: "تور شماره یک",
            Description: "توضیحات",
        },
        {
            Id: 2,
            RecordStatusId: 1,
            Title: "تور شماره دو",
            Description: "توضیحات",
        },
    ];
    constructor() {



    }

    titleUpdated = new EventEmitter<string>();

saveTour(id: number, title: string, description: string)
{
if(id==0)
        this.addTour(titl, description );
else
    updateTour(id, title, description);

    
    title: string, description: string) {
    
    idMax = Math.max.apply(null, this.tours.map(x => x["Id"]));
this.tours.push({
            Id: idMax + 1,
            RecordStatusId: 1,
        Title: title,
        Description:  de scri pt ion  
    });                                    
}

updateTour(id: number, title: string, description: string) {
    this.tours.find(x=>x.Id==id).Title=title;
    this.tours.find(x=>x.Id==id).Description=description;


getTour(id: number) {
    const tour = this .t ours .f ind(x =>  x .Id == id);
      return tour;
  }

 eTitle(id: number, title: string) {
        this.tours.find(x=>x.Id==id).Title=title;
      //  this.tours[id].Title = title;
    }      

}      
interface TourModel {
    Iber;
    RecordStatusId: number;
    Title: string;
    Description: string;
}
