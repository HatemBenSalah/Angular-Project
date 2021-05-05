import { throwError as observableThrowError, Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entity/User';
@Injectable({
    providedIn: 'root'
  })
export class RegistrationService{
    constructor(private http: HttpClient){}

    public register(user:User):Observable<any>{
        return this.http.post<any>("/api/auth/signup",user);

    }
    

}