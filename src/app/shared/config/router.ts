import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { HomeComponent } from 'src/app/home/home.component';

export const routes : Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
      path:'dashboard',
      component: DashboardComponent
  },


]
