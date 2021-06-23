import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup ;
  productName:String='';
  productPrice:number=0;
  constructor(
    public productBuilder:FormBuilder,
    public productService:ProductsServiceService
  ) { }

  ngOnInit() {
    this.productForm = this.productBuilder.group({
      'name':[null,Validators.required],
      'image':[null,Validators.required],
      'category':[null,Validators.required],
      'price':[null,Validators.compose([Validators.required,Validators.pattern("0-9*")])],
      'description':[null,Validators.compose([Validators.required,Validators.minLength(20)])],

    })
  }
  submitProduct(){
    this.productName = this.productForm.value.name;
    this.productPrice = this.productForm.value.price;
    this.productService.addProduct(this.productForm.value).subscribe((res:any)=>{
      alert(res.result);
    })
  }

}
