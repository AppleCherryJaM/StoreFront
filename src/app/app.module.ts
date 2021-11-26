import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {ProductServiceService} from "./product-service.service";
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
