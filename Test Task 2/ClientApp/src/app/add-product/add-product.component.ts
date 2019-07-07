import { ProductDataService } from '../services/product-data.service';
import { CategoryType } from '../services/category-type';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html'
})

export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categoryTypes: string[];
  category: string = 'Text';

  constructor(
    private productDataService: ProductDataService
  ) { }

  ngOnInit() {
    this.productDataService
      .getCategories()
      .subscribe((data: string[]) => this.categoryTypes = data);
  }

  addProduct() {
    this.product.category = CategoryType[this.category];
    this.productDataService
      .createProduct(this.product)
      .subscribe();
  }
}
