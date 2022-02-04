import { Injectable } from '@angular/core';
import { paymentType } from 'src/app/_models/product/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  getAllProductTypes(): paymentType[] {
    throw new Error('Method not implemented.');
  }

  paymentTypes:paymentType[]=[
{id:1,name:'cod'},
{id:2,name:'paybal'},
{id:3,name:'creditcard'},
{id:4,name:'debit card'},
{id:5,name:'visa'},
{id:6,name:'master card'},
{id:7,name:'american express'},
  ]
  constructor() { }
  getAllPaymentTypes():paymentType[]{
    return this.paymentTypes;
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
  
}
