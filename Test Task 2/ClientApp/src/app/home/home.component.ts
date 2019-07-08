import { ProductDataService } from '../services/product-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  products: Product[];
  productsToShow: Product[];
  fromIndex: number = 0;
  toIndex: number = 3;

  constructor(
    private productDataService: ProductDataService
  ) { }

  ngOnInit() {
    this.productDataService
      .getProducts()
      .subscribe((data: Product[]) =>
        this.products = data,
        _ => { },
        () => this.productsToShow = this.products.slice(this.fromIndex, this.toIndex));
  }

  previous() {
    if (this.products.slice(this.fromIndex - 3, this.toIndex - 3).length === 0) {
      return;
    }

    this.fromIndex -= 3;
    this.toIndex -= 3;
    this.productsToShow = this.products.slice(this.fromIndex, this.toIndex);
  }

  next() {
    if (this.products.slice(this.fromIndex + 3, this.toIndex + 3).length === 0) {
      return;
    }

    this.fromIndex += 3;
    this.toIndex += 3;
    this.productsToShow = this.products.slice(this.fromIndex, this.toIndex);
  }
}
