import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import 'rxjs/add/operator/map'

import { UserService } from '../../services/user/user.service';
import { UserToken } from '../../services/user/user-token';

import { SingleComponent } from './../single/single.component';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

  loginUser() {
    console.log("Username : " + this.email);
    console.log("Password : " + this.password);

    if(this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe((token: UserToken) => {

      	if(token.access_token) {
      		console.log("berhasil login!");
		      this.router.navigate(['single']);

      	} else {
      		this.router.navigate(['login']);
      	}
      	
      });
    }
  }
}
