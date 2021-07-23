import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import { Employee } from '../entity/Employee';

 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardEmployee  implements CanActivate {
  employee: Employee = new Employee();
  constructor(private loginService: LoginService, private router: Router , private tokenStorageService: TokenStorageService ) {

  }

  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.employee=this.tokenStorageService.getUser();
    let isLoggedIn = this.loginService .isLoggedInd();

    if (isLoggedIn && (this.employee.roles.match("employee"))) {
      return true;
    }else{
      console.log('redirected to login');
      
      this.router.navigate(['/auth/loginemployee']);
      return false;
    }
    
  }

}
