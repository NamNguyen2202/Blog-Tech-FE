import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  isSidePanelVisible : boolean  = false;

  productOj: any = {
    "ProductId": 0,
    "ProductSku": "string",
    "ProductName": "string",
    "ProductPrice": 0,
    "ProductShortName": "string",
    "ProductDescription": "string",
    "CreatedDate": "2024-04-15T09:38:04.627Z",
    "DeliveryTimeSpan": "string",
    "CategoryId": 0,
    "ProductImageUrl": "string"
  };
  categoryList: any [] = [];

  constructor(private productSrv: ProductService){


  }
  ngOnInit(): void {
      this.getALlCategory();
  }

  getALlCategory(){
    this.productSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }

  openSidePanel(){
    this.isSidePanelVisible=true;
  }

  closeSidePanel(){
    this.isSidePanelVisible=false;
  }
}
