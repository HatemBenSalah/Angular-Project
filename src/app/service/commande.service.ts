import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }


  getCommande(userId){
    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/CommandeController/getCommande/'+userId,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getCommandebyservice(service){
    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/CommandeController/getCommandebyservice/'+service,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getCommandebyemployee(id){
    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/CommandeController/getCommandebyemployee/'+id,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getAllCommande(){
    let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/CommandeController/getAllCommande',{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  private handleError(error: any) { return observableThrowError(error); }
  private extractData(res) {
    console.log(res)
    let body = res;
    return body || {};
  }

  createCommande(commande: Object){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/CommandeController/createCommande',commande,{headers: headers,responseType: 'json'}).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateCommande(Commande): Observable<Object> {
    return this.http.post('/CommandeController/updateCommande',Commande).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
 

  deleteCommande(id: number) {
    return this.http.post('/CommandeController/deleteCommande',id).pipe(
      map(this.extractData),
    
      catchError(this.handleError));
   
  }

}
