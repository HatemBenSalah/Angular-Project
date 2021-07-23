import { throwError as observableThrowError, Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class ClaimService{
    constructor(private http: HttpClient){}
    
  getClaim(userId){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/ClaimController/getClaim/'+userId,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getClaimByEmployeeService(service){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/ClaimController/getClaimByEmployeeService/'+service,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getClaimbyemployeeId(id){
    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/ClaimController/getClaimByEmployeeid/'+id,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getallClaim(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/ClaimController/getallClaim',{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private handleError(error: any) { return observableThrowError(error); }
  private extractData(res) {
    console.log(res)
    let body = res;
    return body || {};
  }

  createClaim(Claim: Object){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/ClaimController/createClaim',Claim,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateClaim(Claim): Observable<Object> {
    return this.http.post('/ClaimController/updateClaim',Claim).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  deleteClaim(id: number) {
    return this.http.post('/ClaimController/deleteClaim',id).pipe(
      map(this.extractData),
    
      catchError(this.handleError));
   
  }


}