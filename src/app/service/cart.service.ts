import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = window.localStorage

  constructor() {}
  getProductFromCard() {
    const productInCard = this.storage.getItem('products')
    return productInCard ? JSON.parse(productInCard) : []
  }
  clearProductFromCard(): void {
    this.storage.clear()
  }
}
