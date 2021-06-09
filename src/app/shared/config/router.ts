import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductComponent } from 'src/app/product/product.component';

export const routes : Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'product',
        component:ProductComponent
    }
]