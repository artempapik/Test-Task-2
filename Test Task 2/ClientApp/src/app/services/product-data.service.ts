import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductDataService {
  private url: string = "/api/products";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }

  createProduct(product: Product) {
    return this.http.post(this.url, product);
  }
}
