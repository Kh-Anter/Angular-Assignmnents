import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
selectedProduct:any;
selectedDetails:any;
  constructor(private activeRoute:ActivatedRoute, private productservice:ProductServiceService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param:ParamMap)=>{this.selectedProduct=param.get("productid")})
  console.log(this.selectedProduct);
  this.selectedDetails=this.productservice.GetProductById(this.selectedProduct);

  }


}
