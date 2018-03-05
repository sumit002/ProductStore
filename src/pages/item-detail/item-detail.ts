import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, 
              private socialSharing: SocialSharing) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  shareData(item) {
    console.log('item to share: ', item);
    const message = item.name + ' - ' + item.price;
    this.socialSharing.shareViaWhatsApp(message, item.profilePic);
  }

  editItem(item) {
    this.navCtrl.push('ItemEditPage', { item: item });
  }

}
