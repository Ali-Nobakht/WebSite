import { EventEmitter, Injectable,Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TourService {

    public tours: TourModel[];
    private headers: HttpHeaders;
    private accessPointUrl: string ;

    constructor( private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   this.accessPointUrl=baseUrl + 'api/Tour';
   console.log(  this.accessPointUrl);

   
    }
     
      
    public get() {
      
        // Get all jogging data
     /*    var list= this.http.get<TourModel[]>(this.accessPointUrl, {headers: this.headers});
        //return this.http.get(this.accessPointUrl, {headers: this.headers});
        console.log(list);
        return list; */
            
          this.http.get<TourModel[]>(this.accessPointUrl, {headers: this.headers})
 .subscribe(result => 
             {
           this.tours = result;  
         
           }, error => console.error(error));
          return this.tours;
      }   
    
      public add(payload) {
        return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
      }
    
      public remove(payload) {
        return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
      }
    
      public update(payload) {
        return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
      }
 

}      
export interface TourModel {
    Id;
    RecordStatusId: number;
    Title: string;
    Description: string;
}
