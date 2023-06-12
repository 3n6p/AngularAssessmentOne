import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  ProductsData:any;

  constructor (public productServiceApi: ProductService){

  }
  ngOnInit(): void {
    this.productServiceApi.getProducts().subscribe((Response:any)=>{
      console.log("rahulcalled",Response);
      this.ProductsData = Response.products;
      console.log("getproducts",this.ProductsData)

    })
  }
  
}
