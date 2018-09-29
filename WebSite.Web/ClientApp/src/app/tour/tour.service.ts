import { EventEmitter, Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TourService {

  public tours: TourModel[];
  public tour: TourModel;
  private headers: HttpHeaders;
  private accessPointUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.accessPointUrl = baseUrl + 'api/Tour';
    console.log(this.accessPointUrl);


  }


  public getTours() {
    console.log('Service')
    return this.http.get<TourModel[]>(this.accessPointUrl, {headers: this.headers});
  }
  public getTour(id:number) {
    console.log("ID::::"+id);
   return this.http.get<TourModel>(this.accessPointUrl+'/'+id ,{ headers: this.headers });
     
  }
  public add(payload) {
    console.log(payload);
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
  }

  public remove(id) {
    
    return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers });
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, { headers: this.headers });
  }


}
export interface TourModel {
  id;
  recordStatusId: number;
  title: string;
  description: string;
}
