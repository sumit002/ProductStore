webpackJsonp([9],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs/Observable';

var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, items, modalCtrl, firebaseServiceProvider, actionsheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.firebaseServiceProvider = firebaseServiceProvider;
        this.actionsheetCtrl = actionsheetCtrl;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.uid = currentUser.uid;
        // console.log('userID: ', currentUser.uid);
        // this.productList = this.firebaseServiceProvider.getItemList(this.uid);
        this.firebaseServiceProvider.getItemList(this.uid).subscribe(function (x) {
            _this.currentItems = x;
            console.log('this.currentItems: ', _this.currentItems);
        });
        // this.currentItems = this.items.queryProduct();
        // console.log('this.currentItems: ', this.currentItems);
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                item.createdOn = new Date().toISOString();
                item.uid = _this.uid;
                _this.firebaseServiceProvider.addItem(item);
                // this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Prompt the user to choose from menu[Edit, Remove, Cancel].
     */
    ListMasterPage.prototype.selectItem = function (item) {
        var _this = this;
        //display the action sheet to fire actions
        this.actionsheetCtrl.create({
            title: "" + item.name,
            buttons: [
                {
                    text: 'View',
                    handler: function () {
                        _this.navCtrl.push('ItemDetailPage', { item: item });
                        // Send user to ItemDetailPage and pass the key as parameter
                        // this.navCtrl.push(ItemDetailPage, { item: item });
                    }
                },
                {
                    text: 'Edit',
                    handler: function () {
                        console.log('edit item: ', item);
                        _this.navCtrl.push('ItemEditPage', { item: item });
                        // this.updateItem(item);
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        // delete current item
                        _this.firebaseServiceProvider.removeProduct(item.documentId);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('The user has canceled the action.');
                    }
                }
            ]
        }).present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        // this.items.delete(item);
        this.firebaseServiceProvider.removeProduct(item.documentId);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"E:\Tutorials\Ionic\ionic3\ionic3SampleApp\src\pages\list-master\list-master.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems">\n      <!-- <button ion-item (click)="openItem(item)" > -->\n      <button ion-item (click)="selectItem(item)">\n        <ion-avatar item-start>\n          <img [src]="item.profilePic" *ngIf="item.profilePic" />\n          <img src="../../assets/img/NotAvailable.png" *ngIf="!item.profilePic" />\n        </ion-avatar>\n        <h2>{{item.serial}}. {{item.name}}</h2>\n        <p>{{item.price | currency: \'Rs \'}}</p>\n        <ion-icon name="heart" color="light" item-end *ngIf="!item.isFavorite"></ion-icon>\n        <ion-icon name="heart" color="danger" item-end *ngIf="item.isFavorite"></ion-icon> \n        <!-- <ion-note item-end *ngIf="item.description">{{item.description}}</ion-note> -->\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          {{ \'DELETE_BUTTON\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addItem()">\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"E:\Tutorials\Ionic\ionic3\ionic3SampleApp\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=9.js.map