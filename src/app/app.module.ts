import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductWrapperComponent } from './product-wrapper/product-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductWrapperComponent,
    ProductsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    LayoutModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
