import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class TourService {
  accounts = [
    {
        name: 'حساب کابری مدیر کل',
        status: 'فعال'
    },
    {
        name: 'اکانت تست',
        status: 'غیرفعال'
    },
    {
        name: 'حساب کاربری مخفی',
        status: 'مخفی'
    }
];
constructor(){
 
}

statusUpdated = new EventEmitter<string>();

addAccount(name: string, status:string){
    this.accounts.push({name: name, status: status});
   // this.loggingService.logStatusChanged(status);
}

updateStatus(id: number, status:string){
    this.accounts[id].status = status;
   // this.loggingService.logStatusChanged(status);
}

}
interface TourModel {
    Id: number;
    RecordStatusId: number;
    Title: string;
    Description: string;
  }