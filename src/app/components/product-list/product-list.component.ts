import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
productList: Product[] = [];
isAdmin : boolean = false;
product: Product = new Product();

constructor(private productSvc: ProductService){}

  ngOnInit(): void{
    this.productSvc.getAllProducts().subscribe({
      next:(resp)=> {
        this.productList = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });
  }
    increaseQuantity(qty: number) {
      this.product.quantity += 1;
    }
  
    decreaseQuantity(qty: number) {
      if (this.product.quantity > 0) {
        this.product.quantity -= 1;
      }
  }

  
}




