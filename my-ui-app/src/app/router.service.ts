import { Injectable } from '@angular/core';
import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  {path: '',    component: HomeComponent },
  {path: 'login', component: LoginComponent},
  ];
