import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { SingleComponent } from './starter/single/single.component';
import { MultiComponent } from './starter/multi/multi.component';
import { UploadComponent } from './starter/upload/upload.component';

import { PackagesService } from './starter/packageservice/packages.service';
import { LoginComponent } from './starter/login/login.component';

import { GuardService } from './services/http/guard.service';
import { AlertService } from './services/alert/alert.service';
import { CaptchaService } from './services/captcha/captcha.service';
import { RoleService } from './services/role/role.service';
import { UserService } from './services/user/user.service';
import { BarangService } from './services/barang/barang.service';
import { DetailbarangService } from './services/barang/detailbarang.service';

import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { RegisterComponent } from './starter/register/register.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
      tokenName: 'access_token'
    }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    SingleComponent,
    MultiComponent,
    UploadComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    PackagesService,
    GuardService,
    AlertService,
    CaptchaService,
    RoleService,
    UserService,
    BarangService,
    DetailbarangService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
