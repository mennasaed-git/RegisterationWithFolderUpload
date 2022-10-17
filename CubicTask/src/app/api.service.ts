import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BaseUrl = "http://azure01.cubicsystems.com/paylater-murabaha-ecommerce/wservice.php/";
  constructor(private http:HttpClient ) {

  } 

  GetMerchantCategories(): Observable<any> { 
    return this.http.get(this.BaseUrl +"getmerchantcategories");
  }


  
}
