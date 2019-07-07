import { ProductDataService } from '../services/product-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
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
