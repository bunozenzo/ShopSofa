import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { Product } from '../dto/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  private ServiceUrl = 'https://5b29bad284ce2c0014d4d197.mockapi.io/Product';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  public getService(): Promise<Product[]> {
    return this.http.get(this.ServiceUrl)
      .toPromise()
      .then(response => response.json() as Product)
      .catch(this.handleError);
  }

  public getServiceId(id: number): Promise<Product> {
    return this.http.get(this.ServiceUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
