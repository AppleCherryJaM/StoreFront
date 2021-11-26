import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
  {path: "categories", component: CategoryListComponent},
  {path: "product", component: ProductComponent},
  {path: "product-list", component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
