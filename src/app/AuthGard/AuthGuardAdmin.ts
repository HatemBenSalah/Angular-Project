import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import { Admin } from 'src/app/entity/Admin';

 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {
  admin: Admin = new Admin();
  constructor(private loginService: LoginService, private router: Router , private tokenStorageService: TokenStorageService ) {

  }

  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
this.admin=this.tokenStorageService.getUser();
    let isLoggedIn = this.loginService .isLoggedInd();

    if (isLoggedIn && (this.admin.roles.match("admin"))) {
      return true;
    }else{
      console.log('redirected to login');
      
      this.router.navigate(['/auth/loginadmin']);
      return false;
    }
    
  }

}
