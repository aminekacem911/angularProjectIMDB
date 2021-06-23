import { Component, Input, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : any ;

  constructor() { }


  ngOnInit(): void {

  }

}
