import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../shared/models/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contact: Array<Contact> = [];
  private header: HttpHeaders;
  constructor(public http: HttpClient) {
    this.header = new HttpHeaders();
    this.header = this.header.append('Content-Type', 'application/json');
  }
  addContact(contact: any) {
    return this.http.post('/miniproject/contact/', contact, {
      headers: this.header,
    });
  }
  getallMsg() {
    return this.http.get('/miniproject/contact/_search', {
      headers: this.header,
    });
  }
  getMsg(id: any) {
    return this.http.get('/miniproject/contact/' + id, {
      headers: this.header,
    });
  }
  deletemsg(id: any) {
    return this.http.delete('/miniproject/contact/' + id, {
      headers: this.header,
    });
  }
}
