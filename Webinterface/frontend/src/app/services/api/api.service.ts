import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public loginUrl = 'http://localhost:3000/auth/login';
  public url = 'http://localhost:3000/auth'


}
