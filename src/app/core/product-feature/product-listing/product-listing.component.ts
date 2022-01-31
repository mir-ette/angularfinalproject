import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productsArray: Product[];
  // @Output()
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();

    

  constructor(private productService: ProductService) 
  { 
    this.productsArray=this.productService.productsArray;
  }

  ngOnInit(): void {
  }
//  Before Using Services :D
  // onitemAddedToCart(product:Product){
  //   console.log(product)
  //   this.itemAdded.emit(product)
  // }
}
