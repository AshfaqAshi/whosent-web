import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import {User} from './User';
import { Observable } from  'rxjs';
import { catchError } from 'rxjs/operators';
import * as data from './infoData.json';
import { Message } from './Message';
@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor(private httpClient:HttpClient) { }

  blockUser(user:User):Observable<any>{
    //alert(user.userId+"ko "+user.mobileNo);
    return this.httpClient.post(data.urls["block-url"],user);
  }

  sendMessage(msg:Message):Observable<any>{
    //console.log("calling...");
    return this.httpClient.post(data.urls["sendMessage-url"],msg);
  }
}
