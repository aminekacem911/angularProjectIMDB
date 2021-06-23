import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private products: Array<Product> = [];
  private header:HttpHeaders;
  constructor(public http:HttpClient) {
    this.header = new HttpHeaders();
    this.header = this.header.append('Content-Type','application/json');
  }
  getProductFromServer(){
    return this.http.get("/epi/product/_search",{headers:this.header});
  }
  addProduct(product:any){
    return this.http.post("/epi/product/",product,{headers:this.header});
  }
  getProduct(id:any)
  {
    return this.http.get('/epi/product/'+id,{headers:this.header});
  }
  updateproduct(id:any,product:any){
    return this.http.post("/epi/product/"+id,product,{headers:this.header});
  }
  getProducts(): any {
    this.products = [
      {
        id: 1,
        name: 'prod1',
        description: 'long desc',
        image: 'assets/img/dummyimg.png',
        price: 100,
        category: 'mobile',
        favorite: false,
      },
      {
        id: 2,
        name: 'prod2',
        description: 'long desc2long desc2long desc2long desc2long desc2long desc2long desc2long desc2long desc2long desc2',
        image: 'assets/img/dummyimg.png',
        price: 200,
        category: 'mobile',
        favorite: false,
      },
    ];
    return this.products;
  }
}
