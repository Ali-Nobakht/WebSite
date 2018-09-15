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


    addTour( title: string, description: string) {

        var idMax=Math.max.apply(null,this.tours.map(x=>x["Id"]));
        this.tours.push({
            Id: idMax+1,
            RecordStatusId: 1,
            Title: title,
            Description: description
        });
    }

    updateTitle(id: number, title: string) {
        this.tours.find(x=>x.Id==id).Title=title;
        //  this.tours[id].Title = title;
    }

}
interface TourModel {
    Id: number;
    RecordStatusId: number;
    Title: string;
    Description: string;
}
