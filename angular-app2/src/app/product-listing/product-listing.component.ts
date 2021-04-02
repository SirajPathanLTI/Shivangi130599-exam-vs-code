import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {

  products: Product[];
  status: Map<number,boolean> = new Map();

  show() {
    this.products = [
      new Product(111, "iPhone 11", "Apple iPhone 11", 49900, 'assets/images/iphone11.jpeg'),
      new Product(222, "S21 Ultra", "Samsung S21 Ultra", 149900, 'assets/images/s21ultra.jpeg'),
      new Product(333, "Macbook Air", "Apple Macbook Air", 99900, 'https://rukminim1.flixcart.com/image/312/312/jsnjbm80/computer/j/8/c/apple-na-thin-and-light-laptop-original-imafe6f78hur4jbh.jpeg?q=70'),
      new Product(444, "HP Envy", "HP Envy", 49900, 'https://rukminim1.flixcart.com/image/312/312/kd69z0w0/computer/m/3/u/hp-original-imafu4xzyz5kcr6n.jpeg?q=70'),
      new Product(555, "iPad Pro", "Apple iPad Pro", 119900, 'https://rukminim1.flixcart.com/image/312/312/kb5eikw0/tablet/a/p/h/apple-mxe42hn-a-original-imafsjzsbfdzewts.jpeg?q=70'),
    ]
  }

  addToCart(id: number) {
   console.log(id);
   //print on the console the remaining details of the selected product
   for(let p of this.products)
    if(p.id == id) {
      this.status.set(id, true);
      p.inCart = true;
    }
  }
}

export class Product {
  
  constructor(public id: number,
              public name: string,
              public description: string,
              public price: number,
              public imgUrl: string,
              public inCart: boolean = false) { }
}
