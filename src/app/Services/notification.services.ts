import { Injectable } from "@angular/core";
import { NotificationEnum } from "../enum/notification-type-enum";
import { NotifierService } from "angular-notifier";



@Injectable({
  providedIn: 'root'
})

export class NotificationServices {

    constructor (private notifier: NotifierService){}
    
    notify(type: NotificationEnum, message: string){
        this.notifier.notify(type, message);
    }
    
}