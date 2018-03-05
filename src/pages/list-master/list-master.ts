import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { ProductItem } from '../../models/product';
// import { Observable } from 'rxjs/Observable';

import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  // currentItems: Item[];
  // productList : Observable<ProductItem[]>;
  currentItems: ProductItem[];
  uid: string;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,
              public firebaseServiceProvider: FirebaseServiceProvider,
              private actionsheetCtrl: ActionSheetController) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.uid = currentUser.uid;

    // console.log('userID: ', currentUser.uid);
    // this.productList = this.firebaseServiceProvider.getItemList(this.uid);
    
    this.firebaseServiceProvider.getItemList(this.uid).subscribe(x => {
      this.currentItems = x;
      console.log('this.currentItems: ', this.currentItems);
    });

    // this.currentItems = this.items.queryProduct();
    // console.log('this.currentItems: ', this.currentItems);
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        item.createdOn = new Date().toISOString();
        item.uid = this.uid;
        this.firebaseServiceProvider.addItem(item);
        // this.items.add(item);
      }
    });
    addModal.present();
  }

  /**
   * Prompt the user to choose from menu[Edit, Remove, Cancel].
   */
  selectItem(item: ProductItem) {
    //display the action sheet to fire actions
    this.actionsheetCtrl.create({
      title:`${item.name}`,
      buttons: [
        {
          text: 'View',
          handler: () => {
            this.navCtrl.push('ItemDetailPage', { item: item });
            // Send user to ItemDetailPage and pass the key as parameter
            // this.navCtrl.push(ItemDetailPage, { item: item });
          }
        },
        {
          text: 'Edit',
          handler: () => {
            console.log('edit item: ', item);
            this.navCtrl.push('ItemEditPage', { item: item });
            // this.updateItem(item);
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // delete current item
            this.firebaseServiceProvider.removeProduct(item.documentId);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('The user has canceled the action.');
          }
        }
      ]
    }).present();
}

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    // this.items.delete(item);
    this.firebaseServiceProvider.removeProduct(item.documentId);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  
}
