import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

// import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: '',
    email: '',
    password: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    // public user: User,
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }
  
  async doSignup() {
    console.log('this.account: ', this.account);
    // var passwordStore = this.account.password;
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        this.account.email,
        this.account.password
      );
      if (result) {
        console.log('register result: ', result);
        localStorage.setItem('isLoggedin', 'true');
        // this.setUserCredentials(result);
        // this.navCtrl.setRoot(HomePage);
        // this.presentToast("Registration successful. Processing for auto login");
        var user = this.afAuth.auth.currentUser;

        user.updateProfile({
          displayName: this.account.name,
          photoURL: ''
        }).then(function() {
          // Update successful.
          console.log('Update successful');
          // this.navCtrl.
        }).catch(function(error) {
          // An error happened.
          console.log('Error in Update!', error);
        });

        this.navCtrl.push(MainPage);
      }
    } catch (e) {
      console.error(e);
      console.log(e.message);
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

    // this.afAuth.auth.auth().createUserWithEmailAndPassword(this.account.email, this.account.password).then(function(user) {
    //     // [END createwithemail]
    //     console.log('created user: ', user);
    //     // var user = firebase.auth().currentUser;
    //     user.updateProfile({
    //         displayName: this.account.name
    //     }).then(function() {
    //         // Update successful.
    //         console.log('Update successful');
    //     }, function(error) {
    //         // An error happened.
    //         console.log('An error happened', error);
    //     });        
    // }, function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // [START_EXCLUDE]
    //     if (errorCode == 'auth/weak-password') {
    //         // alert('The password is too weak.');
    //         let toast = this.toastCtrl.create({
    //           message: 'The password is too weak.',
    //           duration: 3000,
    //           position: 'top'
    //         });
    //         toast.present();
    //     } else {
    //         console.error(error);
    //         let toast = this.toastCtrl.create({
    //           message: this.signupErrorString,
    //           duration: 3000,
    //           position: 'top'
    //         });
    //         toast.present();
    //     }
    //     // [END_EXCLUDE]
    // });
  }

  // doSignup() {
  //   // Attempt to login in through our User service
  //   this.user.signup(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {

  //     this.navCtrl.push(MainPage);

  //     // Unable to sign up
  //     let toast = this.toastCtrl.create({
  //       message: this.signupErrorString,
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   });
  // }
}
