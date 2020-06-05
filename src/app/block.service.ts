import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import {User} from './User';
import { Observable } from  'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor(private httpClient:HttpClient) { }

  blockUser(user:User):Observable<any>{
    //alert(user.userId+"ko "+user.mobileNo);
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.httpClient.post('http://localhost/hu_messenger/block.php',user);
  }
}
