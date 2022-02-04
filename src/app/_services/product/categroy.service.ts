import { Injectable } from '@angular/core';
import { Categroy } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {
categoryArray:Categroy[] =[
  {id:1,name:'food'},
  {id:2,name:'electronics'},
  {id:3,name:'cloths'},
  {id:4,name:'books'},
  {id:5,name:'baby'},
  {id:6,name:'toys'},
  {id:7,name:'sports'},
  {id:8,name:'automotive'},
  {id:9,name:'furniture'},
  {id:10,name:'home'},
  {id:11,name:'health'},
  {id:12,name:'beauty'},
]
  constructor() { }
  getAllCategories():Categroy[]{
    return this.categoryArray;
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
