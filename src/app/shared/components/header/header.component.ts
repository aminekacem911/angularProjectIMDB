import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public result = Math.random().toString(36).substr(2);
  timeLeft: number = 10;
  interval: any;
  public setting: any;
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  logged: boolean = false;

  constructor(
    private router: Router,
    private SettingService: SettingService,
    public loginBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.setting = this.SettingService.getSetting();
    this.loginForm = this.loginBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required]],
    });
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
        this.logged = false;
        console.log(this.logged);
        console.log('Ding!');
      }
    }, 1000);
  }
  submitLogin() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.value.username;
      const passwd = this.loginForm.value.password;
      if (userName === 'demo' && passwd === 'demo') {
        localStorage.setItem('token', this.result);
        this.logged = true;
        console.log(this.logged);
        this.startTimer();
        //console.log("okokook");
        //this.window.location.reload();
        this.router.navigate(['/dashboard']);
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.logged = false;
    this.router.navigate(['/home']);
  }
}
