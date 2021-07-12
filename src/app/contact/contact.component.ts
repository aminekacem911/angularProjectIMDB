import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup ;
  ContactName:String='';
  ContactEmail:String='';
  ContactSubject:String='';
  ContactMessage:String='';

  constructor(
    public ContactBuilder:FormBuilder,
    public contactService:ContactService
  ) { }

  ngOnInit(){
    this.contactForm = this.ContactBuilder.group({
      'name':[null,Validators.required],
      'email':[null, [Validators.required, Validators.email]],
      'subject':[null,Validators.compose([Validators.required,Validators.minLength(5)])],
      'message':[null,Validators.compose([Validators.required,Validators.minLength(20)])],
    })
  }
  submitContact(){
    this.ContactName = this.contactForm.value.name;
    this.ContactEmail = this.contactForm.value.email;
    this.ContactSubject = this.contactForm.value.subject;
    this.ContactMessage = this.contactForm.value.message;
    this.contactService.addContact(this.contactForm.value).subscribe((res:any)=>{
      alert(res.result);
    })
  }

}
