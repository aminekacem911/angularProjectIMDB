import { Component } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public setting: any;
  constructor(
    private SettingService:SettingService,
  ) { }

  ngOnInit() {
    this.setting = this.SettingService.getSetting();
    console.log(this.setting);
  }
}




