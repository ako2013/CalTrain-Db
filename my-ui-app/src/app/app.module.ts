import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routes } from './router.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';

//SERVICE
import { AuthenticationService } from './authentication.service';
import { TrainService } from './train.service';


import { ManageMenuComponent } from './manage-menu/manage-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    ManageMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    AuthenticationService,
    TrainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
