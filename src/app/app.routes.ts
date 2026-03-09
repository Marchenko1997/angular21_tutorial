import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import {  SignalComponent } from './signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './not-found/not-found';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full',
  },
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'variables',
    component: Variables,
  },
  {
    path: '**',
    component: NotFound,
  }
];
