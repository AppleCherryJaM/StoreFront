import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {Product} from "../product";
import {Category} from "../category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductServiceService) {

  }

  ngOnInit(): void {
  }

}
