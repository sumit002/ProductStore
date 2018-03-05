import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirstRunPage } from '../../pages/pages';
import { User } from '../../providers/providers';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user : any = {};
  // posts = [];
  imageUrl: string = 'assets/img/profile/profile-cover.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth) {
    if(JSON.parse(localStorage.getItem('currentUser')) != null){
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      // var user = this.afAuth.auth.currentUser;
    }

    // for (let i = 0; i < 10; i++) {
    //   this.posts[i] = {
    //     text: 'Post text ' + i,
    //     created_at: (i + 1),
    //   };
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  // updateProfile(userData) {
  //   var user = this.afAuth.auth.currentUser;

  //   user.updateProfile({
  //     displayName: this.user.displayName,
  //     photoURL: this.user.photoURL
  //   }).then(function() {
  //     // Update successful.
  //     console.log('Update successful');
  //     // this.navCtrl.
  //   }).catch(function(error) {
  //     // An error happened.
  //     console.log('Error in Update!', error);
  //   });
  // }

  logout() {
    localStorage.clear();
    // this.user.logout();
    this.navCtrl.setRoot(FirstRunPage);
    window.location.reload();
  }

}
