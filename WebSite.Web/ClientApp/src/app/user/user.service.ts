import {  Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  private headers: HttpHeaders;
  private accessPointUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.accessPointUrl = baseUrl + 'api/User';
  }


  public getUsers() {
    console.log('Service')
    return this.http.get<UserModel[]>(this.accessPointUrl, { headers: this.headers });
  }
  public getUser(id: number) {
    console.log("ID::::" + id);
    return this.http.get<UserModel>(this.accessPointUrl + '/' + id, { headers: this.headers });

  }
  public add(payload) {
    console.log("ADD ADD");
    return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
  }

  public remove(id) {

    return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers });
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, { headers: this.headers });
  }


}
export interface UserModel {
  id: number;
  recordStatusId: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}
