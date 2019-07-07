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
  category: string;

  constructor(
    private productDataService: ProductDataService
  ) { }

  changeCategory(category: string) {
    this.category = category;
  }

  addProduct() {
    switch (this.category) {
      case 'Text':
        this.product.category = CategoryType.Text;
        break;
      case 'Music':
        this.product.category = CategoryType.Music;
        break;
      case 'Video':
        this.product.category = CategoryType.Video;
        break;
    }

    this.productDataService
      .createProduct(this.product)
      .subscribe();
  }
}
