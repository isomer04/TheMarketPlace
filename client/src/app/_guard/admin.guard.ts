import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const accountService = inject(AccountService);
      const toastr = inject(ToastrService);

      return accountService.currentUser$.pipe(
        map(user => {
          if(!user) return false;
          if(user.roles.includes('Admin') || user.roles.includes('Moderator')) {
            return true;
          } else {
            toastr.error("You cannot enter this area");
            return false;
          }
        })
      );
  }
  
}
