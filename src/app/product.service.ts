import { Product } from './shared/product.model';
import { Injectable } from '@angular/core';
import { PRODUCTS } from './shared/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts():Product[]{
    return PRODUCTS;
  }
  constructor() { }
}
