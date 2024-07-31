import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get(URL+'/')as Observable<Product[]>;
  }

  
  getProductById(id:number):Observable<Product> {
    return this.http.get(URL + '/'+id) as Observable<Product>;
}

  getProductByCategory():Observable<Product[]>{
  return this.http.get(URL+'/fruits') as Observable<Product[]>;
}
  getProductByCategoryVeggie():Observable<Product[]>{
  return this.http.get(URL+'/veggie') as Observable<Product[]>;
}
getProductByCategoryFrozen():Observable<Product[]>{
  return this.http.get(URL+'/frozen') as Observable<Product[]>;
}
getProductByCategoryGrocery():Observable<Product[]>{
  return this.http.get(URL+'/grocery') as Observable<Product[]>;
}

createProduct( product:Product): Observable<Product>{
    return this.http.post(URL, product) as Observable<Product>;
}

updateProduct(product: Product):Observable<Product> {
    return this.http.put(URL + '/'+product.id,product) as Observable<Product>;
}

deleteProduct(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
}
}
