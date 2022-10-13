import { ProductService } from './../product.service';
import { Product } from './../shared/product.model';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];
  constructor(private productService:ProductService) { }
  getProducts():void{
    this.products = this.productService.getProducts();
  }
  ngOnInit(): void {
    this.getProducts();
  }

}
