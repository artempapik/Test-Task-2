import { ProductDataService } from '../services/product-data.service';
import { ShareDataService } from '../services/share-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  products: Product[];
  productsToShow: Product[];

  constructor(
    private productDataService: ProductDataService,
    private share: ShareDataService
  ) { }

  ngOnInit() {
    this.productDataService
      .getProducts()
      .subscribe((data: Product[]) =>
        this.products = data,
        _ => { },
        () => this.productsToShow = this.products.slice(this.share.fromIndex, this.share.toIndex));
  }

  previous() {
    if (this.products.slice(this.share.fromIndex - 3, this.share.toIndex - 3).length === 0) {
      return;
    }

    this.share.fromIndex -= 3;
    this.share.toIndex -= 3;
    this.productsToShow = this.products.slice(this.share.fromIndex, this.share.toIndex);
  }

  next() {
    if (this.products.slice(this.share.fromIndex + 3, this.share.toIndex + 3).length === 0) {
      return;
    }

    this.share.fromIndex += 3;
    this.share.toIndex += 3;
    this.productsToShow = this.products.slice(this.share.fromIndex, this.share.toIndex);
  }
}
