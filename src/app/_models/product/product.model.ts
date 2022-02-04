// import { Supplier } from "./supplier.model";

// export interface Product {
//     id?: number;
//     name: string;
//     price: number;
//     discount: number; // (?) Means optional
//     imageUrl: string;
//     supplier?: Supplier;
//     Count:number;
// }

import { Categroy } from "./category.model";
import { paymentType } from "./payment-type.model";
import { productLang } from "./product-lang.model";
import { Supplier} from "./supplier.model";
import { Tag } from "./tags.model";

export interface Product{
    Count: any;
    id?:number;
    data : productLang[];
    price : number;
    discount?: any ;
    imageUrl?:string;
    supplier? : Supplier;
    category:Categroy;
    tags:Tag[];

    paymentTypes:paymentType[]
}
// export interface AllProductResponse{
//     product:Product[],
//     numberOfProducts:number
// }