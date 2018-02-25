import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, 
	Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class GuardService {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  	if(this.userService.hasRole('USER')) {
  		return true;
  	} else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
