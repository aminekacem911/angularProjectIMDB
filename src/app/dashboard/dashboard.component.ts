import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public contacts: any= [];
  public total:string='';
  public onecontact :any=[]
  constructor(
    private contactservice:ContactService) {}


  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.contactservice.getallMsg().subscribe((res:any) =>{
      this.contacts = res['hits']['hits'];
      this.total = res['hits']['total'];
      console.log(this.contacts);
    });

  }
  delete(id:any)
  {
    return this.contactservice.deletemsg(id).subscribe((res:any) =>{
      window.location.reload();
      console.log("done!");
    });
  }
  findmsg(id:any)
  {
    // this.contactservice.getallMsg().subscribe((res:any) =>{
    //   const data  = res['hits']['hits'];
    //   //console.log("ok",data);
    //   for(let con of data){
    //     console.log(id);
    //     console.log("yo",con['_id']);
    //      if(con['_id'] === id){
    //        this.onecontact = con ;
    //        console.log("okkkk",this.onecontact)
    //      }
    //   }

    //   //console.log(this.onecontact);
    // });
    console.log("id",id);
    // this.onecontact = this.contactservice.getMsg(id);
    // console.log(this.contactservice.getMsg(id));
    this.contactservice.getMsg(id).subscribe((res:any) =>{
      this.onecontact = res['_source'];

      console.log(this.onecontact);
    });
    }


}
