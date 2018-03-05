import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Item } from '../../models/item';
// import { Items } from '../../providers/providers';

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { ProductItem } from '../../models/product';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  productList : ProductItem[];
  uid: string;
  currentItems: ProductItem[];
  searchText = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public firebaseServiceProvider: FirebaseServiceProvider) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // this.uid = currentUser.uid;
      this.firebaseServiceProvider.getItemList(currentUser.uid).subscribe(x => {
        this.currentItems = x;
        this.productList = x;
      });
      // console.log('currentItems ', this.currentItems);
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      // this.currentItems = [];
      return [];
    }
    // this.currentItems = this.items.query({
    //   name: val
    // });

    this.currentItems = this.productList.filter( it => {
      if(it.name && it.name.toLowerCase().includes(val.toLowerCase()) || it.serial && it.serial.toLowerCase().includes(val.toLowerCase())){
        return it;
      };
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  itemTapped(event, item) {
    //console.log('Selected item key: ', product.$key);
    this.navCtrl.push('ItemDetailPage', {
      key: item
    });
  }

}
