// import { HttpClient } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
// import { Observable } from "rxjs";
// import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import {  Product } from "src/app/_models/product/product.model";
import { environment } from "src/environments/environment";

export class ProductService {
  removeItem(id: number | undefined) {
    throw new Error('Method not implemented.');
  }
  removeProduct(id: number | undefined) {
    throw new Error('Method not implemented.');
  }
  productsArray: Product[] = [
    {
      id: 1, data: [{ name: 'watch', description: 'test', lang: { name: 'en' } }], category: { id: 1, name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }], price: 2000, discount: 20, imageUrl: "http://picsum.photos/200/300", Count: 1
    },
    {
      id: 2,
      data: [{ name: 'laptop', description: 'test', lang: { name: 'en' } }], category: { id: 1, name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }],
      price: 2000, discount: 20, imageUrl: "http://picsum.photos/200/305", Count: 1
    },
    {
      id: 3, data: [{ name: 'i phone', description: 'test', lang: { name: 'en' } }], category: { name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }], price: 8000, discount: 80, imageUrl: "http://picsum.photos/200/309", Count: 1
    },

    {
      id: 4, data: [{ name: 'mobile', description: 'test', lang: { name: 'en' } }], category: { name: 'food' }, tags: [{ name: 'food' }],

      paymentTypes: [{ name: 'miza' }], price: 9000, discount: 20, imageUrl: "http://picsum.photos/200/308", Count: 1
    },


    {
      id: 5, data: [{ name: 'tv', description: 'test', lang: { name: 'en' } }], category: { name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }], price: 1000, imageUrl: "http://picsum.photos/200/307", Count: 1
    },

    {
      id: 6, data: [{ name: 'tablet', description: 'test', lang: { name: 'en' } }], category: { name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }], price: 2000, discount: 20, imageUrl: "http://picsum.photos/200/308", Count: 1
    },

    {
      id: 7, data: [{ name: 'camera', description: 'test', lang: { name: 'en' } }], category: { name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }], price: 4000, imageUrl: "http://picsum.photos/200/309", Count: 1
    },

    {
      id: 8, data: [{ name: 'fridge', description: 'test', lang: { name: 'en' } }], category: { name: 'food' }, tags: [{ name: 'food' }],
      paymentTypes: [{ name: 'miza' }], price: 6000, discount: 30, imageUrl: "http://picsum.photos/200/304", Count: 1
    }

  ];
  private cartArray: Product[] = [];
  cartHasBeenChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  search: any;
  constructor() {

  }
  getAllProducts(): Product[]  {
    return this.productsArray;
  }
  getProductById(id: number) {
    return this.productsArray.find(product => product.id === id)

  }
  addProduct(product: Product) {
    this.productsArray.push(product);
  }
  updateProduct() { }
  deleteProduct() { }
  addProductToCart(product: Product) {
    console.log(product);
    if (this.cartArray.includes(product)) {
      product.Count++;
    } else {
      this.cartArray.push(product);
      this.cartHasBeenChanged.emit(this.cartArray);
    }

  }


}