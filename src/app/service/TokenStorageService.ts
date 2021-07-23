import { Injectable } from "@angular/core";
import { Commande } from "../entity/Commande";
 

const TOKEN_KEY = 'accessToken';
const USER_KEY = 'tokenType';
const COMMANDE_KEY = 'commandekey';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    console.log('save token', token);
    
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveCommande(commande: Commande): void {
    localStorage.removeItem(COMMANDE_KEY);
    localStorage.setItem(COMMANDE_KEY, JSON.stringify(commande));
  }
  public getCommande(): any {
    const commande = localStorage.getItem(COMMANDE_KEY);
    if (commande) {
      return JSON.parse(commande);
    }

    return {};
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}