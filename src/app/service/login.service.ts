import {  map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TokenStorageService } from 'src/app/service/TokenStorageService';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  isLoggedIn = false;
    httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }
  
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post('/api/auth/signin', {
      email,
      password,
    }, this.httpOptions).pipe(map(data=>
      {
        return data;
      })); 
    }

    loginAdmin(email: string, password: string): Observable<any> {
      return this.http.post('/api/authAdmin/signin', {
        email,
        password,
      }, this.httpOptions).pipe(map(data=>
        {
          return data;
        })); 
      }

      loginEmployee(email: string, password: string): Observable<any> {
        return this.http.post('/api/authemployee/signin', {
          email,
          password,
        }, this.httpOptions).pipe(map(data=>
          {
            return data;
          })); 
        }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    private log(message: string) {
      console.log(message);
    }
  
    isLoggedInd(){
      if (this.tokenStorage.getToken()) {
        return true ;
      } else {
        return false;
      }
    }
 
  
  
  
}
