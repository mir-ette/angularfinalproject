import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categroy } from 'src/app/_models/product/category.model';
import { paymentType } from 'src/app/_models/product/payment-type.model';
import { Product } from 'src/app/_models/product/product.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategroyService } from 'src/app/_services/product/categroy.service';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  paymentTypes: paymentType[] = [];
  categoryArray!: Categroy[];
  
  product={} as Product;
  tagArray: Tag [] =[];
  editMode=false;
  categories: any;
  // engMode = true;
  // arMode = false;
  constructor(private productService: ProductService , private router:Router, private paymentTypeService: PaymentTypeService,private categroyService: CategroyService,private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    console.log('params',this.activatedRoute.snapshot.params);
    console.log('url',this.activatedRoute.snapshot.url[0].path);
    if(this.activatedRoute.snapshot.url[0].path=='edit'){
      this.editMode= true;
    }
    if(this.editMode){
      this.getProuductById();
    }
this.getAllProductTypes();
this.getAllCategories();

  }


  getProuductById(){
    const id = +this.activatedRoute.snapshot.params['productId'];
  this.product=this.productService.getProductById(id)!;
  console.log(this.product);
  
  }
  getAllProductTypes() {
    this.paymentTypes = this.paymentTypeService.getAllPaymentTypes();
  }
  getAllCategories(){
    this.categoryArray=this.categroyService.getAllCategories();
  }
  onCheckBoxChanged(index:number){
    if(this.product.paymentTypes){this.product.paymentTypes =[
      ...this.product.paymentTypes,
      this.paymentTypes[index],
    ];


    } else{this.product.paymentTypes=[this.paymentTypes[index]];

    }
    console.log(this.product);
    
  }
  RemoveTag(tag :Tag): void{
  
    this.tagArray.splice(this.tagArray.indexOf(tag),1)
 }
RemoveAllTags(): void{ this.tagArray.splice(0)}
//   onAddProduct(form:any){
//     console.log(form);
//     const product :Product = form.value;
//     this.productService.addProduct(product);
//     // making route with j.s
//     // this.router.navigateByUrl('product-listing');
//   }
// }
getPaymentType(values: any) {
  let paymentTypes: paymentType[] = []
  for (let type = 0; type < this.paymentTypes.length; type += 1) {
    values["checkbox_" + this.paymentTypes[type].id] && paymentTypes.push({ name: this.paymentTypes[type].name })
  }
  return paymentTypes
}

// changeToArMode(){
//   this.engMode = false;
//   this.arMode = true;}
// changeToEngMode(){
//   this.engMode = true;
//   this.arMode = false;}
// onAddProduct(form:any)
// { console.log(form.value);

//   const product: Product = <Product>{
//   id: Math.random(),
//   data: [{
//     name: form.value.name,
//     description: form.value.description
//   }],
//   price: form.value.price,
//   discount: form.value.discount,
//   category: this.categories.find((cat: { id: number; }) => cat.id === +form.value.category),paymentTypes
//    : [{name:"cod" }],
// }}}
onAddProduct(form: any) {
  const product: Product = <Product>{
    id: Math.random(),
    data: [{
      name: form.value.name,
      description: form.value.description
    }],
    price: form.value.price,
    discount: form.value.discount,
    category: this.categories.find((cat: { id: number; }) => cat.id === +form.value.category),
    paymentTypes: this.getpaymentTypes(form.value)
  };
  console.log(product);
  this.productService.addProduct(product)
  this.router.navigateByUrl('home')
}
  getpaymentTypes(value: any): paymentType[] {
    throw new Error('Method not implemented.');
  }
}

function changeToEngMode() {
    throw new Error('Function not implemented.');
  }
