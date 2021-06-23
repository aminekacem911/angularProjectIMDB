import { Routes } from '@angular/router';
import { AddProductComponent } from 'src/app/add-product/add-product.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductComponent } from 'src/app/product/product.component';
import { UpdateProductComponent } from 'src/app/update-product/update-product.component';

export const routes : Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'product',
        component:ProductComponent
    },
    {
      path:'add-product',
      component:AddProductComponent
  },
  {
    path:'update-product/:id',
    component:UpdateProductComponent
}
]
