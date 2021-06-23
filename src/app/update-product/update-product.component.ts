import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id:any;
  productForm!: FormGroup ;
  productName :any = '';
  productPrice :any = '';
  productDescription :any = '';
  productImage :any = '';
  productCategory:any= '';


  constructor(
    public productBuilder:FormBuilder,
    public router:ActivatedRoute,
    public productService:ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.productForm = this.productBuilder.group({
      'name':[null,Validators.required],
      'image':[null,Validators.required],
      'category':[null,Validators.required],
      'price':[null,Validators.compose([Validators.required,Validators.pattern("0-9*")])],
      'description':[null,Validators.compose([Validators.required,Validators.minLength(20)])],

    })
    this.productService.getProduct(this.id).subscribe((res:any)=>{
    this.productName = res._source.name
    this.productPrice = res._source.price
    this.productDescription = res._source.description
    this.productCategory =res._source.category

    })
  }
  submitProduct(){
    this.productService.updateproduct(this.id,this.productForm.value).subscribe((res:any)=>{

alert(res.result);
      })
  }

}
