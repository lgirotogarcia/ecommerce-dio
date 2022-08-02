import { Component, Input, OnInit } from '@angular/core';
import { Item } from './model/item';
import { ProductService } from './product-list.component.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  productService: ProductService


  constructor(itemService: ProductService) {
    this.productService = itemService
  }

  ngOnInit(): void {

    this.products = this.productService.getItem().subscribe((data => {
      this.products = data;
      console.log(this.products)
    }))

  }

}
