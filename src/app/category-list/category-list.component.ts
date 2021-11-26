import { Component, OnInit } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import {Category} from "../category";
import {ProductServiceService} from "../product-service.service";
import {Router} from "@angular/router";
import {Product} from "../product";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  cum: Category[] = [
    {id: 1,
     name: "FirstCat",
     products: [
       {
         id: 1,
         name: "Ass",
         country: "Japan",
         price: 100,
         imgPath: "Ass"
       }
     ]
    }
  ];

  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(
      data => {
        this.categories = data
      }
    );
  }

  public getProductViaClick(product: Product) {
    return product;
  }

  goToCategoryList(product: Product) {
    this.router.navigate(["/product"]);
    this.getProductViaClick(product);
  }
}
