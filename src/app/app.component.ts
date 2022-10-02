import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';
  thename:string="";
  myProducts:any='';

  @ViewChild(ProductComponent) child: ProductComponent;

// showProd(){
//   this.myProducts= this.child.renderValue()
// }
}
