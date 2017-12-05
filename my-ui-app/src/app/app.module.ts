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
import { UserService } from './user.service';
import { TravelsService } from './travels.service';
import { TicketService } from './ticket.service';
import { StationService } from './station.service';
import { StartsAtService } from './starts-at.service';
import { EndsAtService } from './ends-at.service';
import { RouteService } from './route.service';
import { PurchaseService } from './purchase.service';
import { NextStationService } from './next-station.service';
import { PrevStationService } from './prev-station.service';




import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { IndexPageComponent } from './index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    ManageMenuComponent,
    FrontPageComponent,
    IndexPageComponent
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
    TrainService,
    UserService,
    TravelsService,
    TicketService,
    StationService,
    StartsAtService,
    EndsAtService,
    RouteService,
    PurchaseService,
    NextStationService,
    PrevStationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
