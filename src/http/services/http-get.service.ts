import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from './../model/User.class';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {

  constructor(
  	public _http:HttpClient
  	) { }
  getAll(api :string):Observable<HttpResponse<User[]>>{
  	return this._http.get<User[]>(api,{observe:"response"}).pipe(catchError(this.errorHandle));
  }
  errorHandle(error: HttpErrorResponse){
  	return throwError(error.message || "tao met roi");
  }
}
