import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  // Add Product to cart is configured to append a product
  // to an array of items
  addToCart(product: Product){
    this.items.push(product);
  }

  // GetItems is configured to collects the item users add
  // to the cart and returns each item with associated quantity
  getItems(){
    return this.items;
  }

  // CleartCart() method returns an empty array of items,
  // which empties the cart
  clearCart(){
    this.items = [];
    return this.items;
  }

  // To get shipping data, from shipping.json, you can use the HttpClient get() method
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
