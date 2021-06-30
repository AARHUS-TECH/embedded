import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  public async login() {
    const username = this.username;
    const password = this.password;

    // console.log(email, password);

    const body = { username, password};

    console.log(body, "from login.component.ts")

    await this.authService.login(body);

    setTimeout(() => {
      if (this.authService._isLogedIn === true) {
        this.router.navigate(['dashboard']);
      }
    }, 100)
  }


  ngOnInit(): void {
  }

}
