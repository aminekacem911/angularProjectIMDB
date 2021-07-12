import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   public result = Math.random().toString(36).substr(2)
   timeLeft: number = 10;
   interval:any;
  public setting: any;
  constructor(
    private SettingService:SettingService,
  ) { }

  ngOnInit() {
    this.setting = this.SettingService.getSetting();
       //this.startTimer()
     console.log(this.result);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        console.log('Ding!');
      }
    },1000)
  }
}
