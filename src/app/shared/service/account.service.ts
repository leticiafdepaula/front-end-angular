import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl = 'localhost:9093/operador/v1/criar-conta';
  
  constructor() { }
}
