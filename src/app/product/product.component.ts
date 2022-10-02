import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import {IProduct,ICategory,discountOffers} from "../Shared Classes and types/interface";
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  fullName:string="";
  showMyDiv:boolean=false;
  newDiscount:number=0.15;

  isNoDiscount?:boolean;
  itemImageUrl:string ="./assets/img.jpg";
  Discount:discountOffers;
  StroreName:string;
  StoreLogo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:Boolean;


  constructor(private productService:ProductServiceService , private activeRoute:ActivatedRoute, private route:Router) {
    this.Discount=discountOffers['No Discount'];
    this.StroreName="sdsa";
    this.StoreLogo="fhfjf";
    this.ProductList=[];
    this.CategoryList=[{id:12,name:"sassd"},{id:13,name:"abcd"}];
    this.ClientName="asdascsd";
    this.IsPurshased=true;
    this.isNoDiscount=(this.Discount==discountOffers['No Discount']);
  }

  // @Output() childEvent=new EventEmitter();



  ngOnInit(): void {
  }

  showOrHide() {
    
    this.showMyDiv=true;
  }

  // sendData(){
  //  this.childEvent.emit(this.ProductList);
  // }

  renderValue(){
    this.ProductList= this.productService.GetAllProducts();
  }

  showProDetail(product:any){
    this.route.navigate(["productDetails",product])
  }

}
