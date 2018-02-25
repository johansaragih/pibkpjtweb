import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../../services/user/user.model';
import { UserService } from '../../services/user/user.service';
import { CaptchaService } from '../../services/captcha/captcha.service';
import { Captcha } from '../../services/captcha/captcha.model';
import { Response } from '@angular/http';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('captchaImage') el: ElementRef;
  // @ViewChild('captchaImage', { read: ElementRef }) captchaImage:ElementRef;

  userData: User = {
    email: '',
    password: '',
    companyName: '',
    token: '',
    npwp: '',
    captcha: {
   	  id: 0,
      captcha: ''
    }
  };

  reapetedPassword = {value: ''};

  constructor( private userService: UserService, private router: Router,
  	private captchaService: CaptchaService, 
  	private alertsService: AlertService) { }

  ngOnInit() {
  	this.showNewCaptcha();
  }

  refreshCaptcha() {
  	this.showNewCaptcha();
  }

  showNewCaptcha() {
  	this.captchaService.getCaptcha().subscribe((captcha: Captcha) => {
  		this.userData.captcha.id = captcha.id;
  		this.el.nativeElement.src = 'data:image/png;base64,' + captcha.captchaImage;
  	});
  }

  registerUser(valid: boolean) {
  	if(!valid) {
  		return;
  	}

  	this.userService.register(this.userData).subscribe(() => {

  		this.router.navigate(['single']);

  		this.alertsService.addAlert({
  			type: 'success',
  			message: 'An e-mail has been send to you with activation link. ' + 
  				'You have to activate your e-mail address before you will be able to login.' 
  		});


  	}, (error: Response) => {
  		if(error.json && error.json().message === 'invalid_captcha') {
  			this.showNewCaptcha();
  			this.userData.captcha.captcha = '';
  		}
  	});
  }

}
