import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
