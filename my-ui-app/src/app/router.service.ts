import { Injectable } from '@angular/core';
import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { IndexPageComponent } from './index-page/index-page.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: FrontPageComponent},
  {path: 'index', component: IndexPageComponent},
  {path: 'admin',    component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'manage', component: ManageMenuComponent}
  
  ];
