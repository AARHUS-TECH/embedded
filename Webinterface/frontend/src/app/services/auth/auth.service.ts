import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from 'src/app/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLogedIn = false;


  constructor(
    private apIService: ApiService,
    private http: HttpClient
  ) { }
  public login(body: any) {
    console.log(body)
    return this.http.post<any>(this.apIService.loginUrl, body).subscribe((res) => {
      console.log(res, "from authService Frontend")
      if (res == true) {
        this._isLogedIn = true;
        console.log(this._isLogedIn);
      }
    })
  }
}
