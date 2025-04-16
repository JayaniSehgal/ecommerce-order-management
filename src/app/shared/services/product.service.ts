import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<
      Product[]
    >;
  }

  addProduct(product: Product) {
    const productsRef = collection(this.firestore, 'products');
    return addDoc(productsRef, product);
  }

  updateProduct(productId: string, updatedData: Partial<Product>) {
    const productDoc = doc(this.firestore, `products/${productId}`);
    return updateDoc(productDoc, updatedData);
  }

  deleteProduct(productId: string) {
    const productDoc = doc(this.firestore, `products/${productId}`);
    return deleteDoc(productDoc);
  }
}
