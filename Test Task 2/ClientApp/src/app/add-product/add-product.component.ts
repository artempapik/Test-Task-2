import { ProductDataService } from '../services/product-data.service';
import { CategoryType } from '../services/category-type';
import { Product } from '../services/product';
import { Component } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html'
})

export class AddProductComponent {
  product: Product = new Product();
  category: string = 'Text';

  constructor(
    private productDataService: ProductDataService
  ) { }

  addProduct() {
    this.product.category = CategoryType[this.category];
    this.productDataService
      .createProduct(this.product)
      .subscribe();
  }
}
