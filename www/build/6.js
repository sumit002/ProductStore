webpackJsonp([6],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.user = {};
        // posts = [];
        this.imageUrl = 'assets/img/profile/profile-cover.jpg';
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
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
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
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
    ProfilePage.prototype.logout = function () {
        localStorage.clear();
        // this.user.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_pages__["a" /* FirstRunPage */]);
        window.location.reload();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\Tutorials\Ionic\ionic3\ionic3SampleApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}"></div>\n    <div id="content">\n      <div id="profile-info">\n        <img id="profile-image" [src]="user.photoURL" *ngIf="user.photoURL" />\n        <img src="../../assets/img/NotAvailable.png" *ngIf="!user.photoURL" />\n        <h3 id="profile-name">{{user.displayName}}</h3>\n        <h4>{{user.phoneNumber}}</h4>\n        <span id="profile-description">{{user.email}}</span>\n        <!-- <p>Follow my <a href="https://twitter.com/ionicframework">@facebook</a> and\n          <a href="https://twitter.com/driftyco">@twitter</a> accounts.</p> -->\n      </div>\n      <div padding>\n        <button ion-button color="primary" block (click)="logout();">Logout</button>\n      </div>\n      <!-- <ion-list>\n        <ion-item *ngFor="let post of posts">\n          <img class="post-profile-image" src="assets/img/misc/cat.jpg"> {{post.text}}\n          <div class="post-time">{{post.created_at}} something</div>\n          <div class="post-options">\n            <ion-icon name="undo"></ion-icon>\n          </div>\n        </ion-item>\n      </ion-list> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Tutorials\Ionic\ionic3\ionic3SampleApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map