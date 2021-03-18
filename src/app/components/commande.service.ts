import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, ResponseContentType, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }


  getCommande(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get('/CommandeController/getCommande',{headers: headers,responseType: 'json'}).pipe(
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
