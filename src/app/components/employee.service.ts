import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getEmployee(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/EmployeeController/getEmployee',{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private handleError(error: any) { return observableThrowError(error); }
  private extractData(res) {
    console.log(res)
    let body = res;
    return body || {};
  }

  createEmployee(employee: Object){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/EmployeeController/createEmployee',employee,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateEmployee(employee): Observable<Object> {
    return this.http.post('/EmployeeController/updateEmployee',employee).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  deleteEmployee(id: number) {
    return this.http.post('/EmployeeController/deleteEmployee',id).pipe(
      map(this.extractData),
    
      catchError(this.handleError));
   
  }

}
