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
import { MatTabsModule } from '@angular/material/tabs';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects, productsFeatureKey, productsReducer } from './products/store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesEffects, categoriesFeatureKey, categoriesReducer } from './categories/store';
import { ProductProfileEffects, productProfileFeatureKey, productProfileReducer } from './product-profile/store';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { loginFeatureKey, loginReducer } from './login/store';
import { LoginEffects } from './login/store/effects/login.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductWrapperComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductProfileComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    LayoutModule,
    MatGridListModule,
    MatTabsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ProductsEffects, CategoriesEffects, ProductProfileEffects, LoginEffects]),
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forFeature(categoriesFeatureKey, categoriesReducer),
    StoreModule.forFeature(productProfileFeatureKey, productProfileReducer),
    MatButtonModule,
    StoreModule.forFeature(loginFeatureKey, loginReducer)
  ],
  providers: [
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
