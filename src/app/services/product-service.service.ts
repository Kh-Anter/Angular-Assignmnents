import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 myProducts=[{'id':22,name:"Kia",quantity:5,price:350000,img:"asdadsccwdwefwef"},{'id':23,name:"honda",quantity:2,price:550000,img:"asdadsccwefwef"},{'id':24,name:"BMW",quantity:5,price:8050000,img:"asdadsccwdwefwef"}]
  constructor() { }
  
  GetAllProducts(){
    return this.myProducts;
  }
  GetProductById(prdId:any):any{
for (let index = 0; index < this.myProducts.length; index++) {
     if(this.myProducts[index].id==prdId){
      return this.myProducts[index];
     }
  
}
}
}
