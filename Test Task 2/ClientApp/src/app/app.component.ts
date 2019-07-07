import { ProductDataService } from './services/product-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './services/product';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  products: Product[];

  constructor(
    private productDataService: ProductDataService
  ) { }

  ngOnInit() {
    this.productDataService
      .getProducts()
      .subscribe((data: Product[]) => this.products = data);
  }
}
