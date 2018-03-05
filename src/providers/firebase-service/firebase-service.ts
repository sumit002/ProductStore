import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProductItem } from '../../models/product';
import * as firebase from 'firebase/app';


@Injectable()
export class FirebaseServiceProvider {
  productItem = {} as ProductItem;
  prodCollection: AngularFirestoreCollection<ProductItem> ;
  documentRef : AngularFirestoreDocument<ProductItem>;

  constructor(public http: HttpClient,
      private afs: AngularFirestore) {
    
        console.log('Hello FirebaseServiceProvider Provider');
  }

  getItem (documentId) {
    this.documentRef = this.prodCollection.doc(documentId);
    return this.documentRef.valueChanges();
    // this.documentRef.valueChanges().subscribe(data => { return data; });
  }

  getItemList(uid?) {
    console.log('uid', uid);
    if(uid != null){
      this.prodCollection = this.afs.collection('products', ref => ref.where('uid', '==', uid));
    } else {
      this.prodCollection = this.afs.collection('products', ref => ref.orderBy('name', 'asc'));
    }
    return this.prodCollection.valueChanges();
  }

  addItem(prod: ProductItem) {
    this.prodCollection.add(prod).then((docRef) => {
      this.prodCollection.doc(docRef.id).update({
        // creating a documentId for each record
        documentId: docRef.id
      });
      return docRef.id;
    }).catch((err) => { console.log(err); });
  }

  updateProduct(prod: ProductItem) {
    this.prodCollection.doc(prod.documentId).update(prod).then((result) => {
      console.log('updated result: ', result);
    })
  }
 
  removeProduct(docId) {
    this.prodCollection.doc(docId).delete().then(() => {
      console.log('Item deleted');
    })
  }

  setItem(prod): ProductItem {
    this.productItem.documentId = prod.documentId;
    this.productItem.name = prod.name;
    this.productItem.price = prod.price;
    this.productItem.description = prod.description;
    return this.productItem;
  }

  validateProduct(prod: ProductItem): boolean {
    if(!prod.name || !prod.serial || !prod.price)
      return false;
    else 
      return true;
  }

  getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

}
