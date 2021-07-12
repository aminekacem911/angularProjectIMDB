import { Injectable } from '@angular/core';
import { Setting } from '../shared/models/setting';


@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private settings: any;
  constructor() { }
  getSetting(): any {
    this.settings = [
      {
        id:1,
        name:"netflixIMDB",
        contact:"contact@contact.com",
        image: 'assets/img/star.png',
        mobile:"21693387306",
        Location:"tunsia,sousse,akouda4022",
      },

    ];
    return this.settings;
  }
}
