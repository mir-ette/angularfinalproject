import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product= {} as Product;
  relatedProducts!:Product[];
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['productId']);
    this.getProuductById();
    this.getRelatedProducts();
  
  }
  // getProuductById(){
  //   const id = +this.activatedRoute.snapshot.params['productId'];
  //   console.log(id);
    
  // this.product=this.productService.getProductById(id)!;
  // console.log(this.product);
  
  // }
  getProuductById(){ 
    this.activatedRoute.params.subscribe(
      (params)=>{
        const id =+params['productId'];
      console.log(params);
    this.product=this.productService.getProductById(id)!;
    console.log(this.product);
    },
     
    )
  
  }

       

   getRelatedProducts(){
    this.relatedProducts=this.productService.getAllProducts().slice(0,4)
   }
  
   }
