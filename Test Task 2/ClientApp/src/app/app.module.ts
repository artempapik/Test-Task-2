import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDataService } from './services/product-data.service';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'home', component: HomeComponent },
      { path: 'home/add-product', component: AddProductComponent }
    ])
  ],
  declarations: [
    AppComponent,
    AddProductComponent,
    HomeComponent
  ],
  providers: [
    ProductDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
