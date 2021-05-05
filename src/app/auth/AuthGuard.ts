import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import { User } from 'src/app/entity/User';

 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: User = new User();
  constructor(private loginService: LoginService, private router: Router , private tokenStorageService: TokenStorageService ) {

  }

  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
this.user=this.tokenStorageService.getUser();
    let isLoggedIn = this.loginService .isLoggedInd();

    if (isLoggedIn && (this.user.roles.match("client"))) {
      return true;
    }else{
      console.log('redirected to admin');
      
      this.router.navigate(['/admin']);
      return false;
    }
    
  }

}
