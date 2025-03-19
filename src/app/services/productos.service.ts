import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos} from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private options;
  private url = 'http://127.0.0.1:5000/api/productos';

  constructor(public http: HttpClient) {
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json'
    })
    this.options= {headers:headers}
   }
}
