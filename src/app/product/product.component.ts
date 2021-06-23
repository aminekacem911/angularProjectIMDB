import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: any= [];

  constructor(
    private productService:ProductsServiceService) {}


  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productService.getProductFromServer().subscribe((res:any) =>{
      this.products = res['hits']['hits'];
    });
    
  }

}
