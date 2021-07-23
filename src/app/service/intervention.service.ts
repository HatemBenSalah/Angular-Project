import { throwError as observableThrowError, Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class InterventionService{
    constructor(private http: HttpClient){}
    
 
  
  getInterventionByEmployeeService(service){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/InterventionController/getInterventionByEmployeeService/'+service,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getInterventionbyemployeeId(id){
    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/InterventionController/getInterventionByEmployeeid/'+id,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getallIntervention(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/InterventionController/getallIntervention',{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private handleError(error: any) { return observableThrowError(error); }
  private extractData(res) {
    console.log(res)
    let body = res;
    return body || {};
  }

  createIntervention(Intervention: Object){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/InterventionController/createIntervention',Intervention,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateIntervention(Intervention): Observable<Object> {
    return this.http.post('/InterventionController/updateIntervention',Intervention).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  deleteIntervention(IdIntervention: number) {
    return this.http.post('/InterventionController/deleteIntervention',IdIntervention).pipe(
      map(this.extractData),
    
      catchError(this.handleError));
   
  }


}