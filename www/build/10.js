webpackJsonp([10],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditPageModule", function() { return ItemEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_edit__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemEditPageModule = (function () {
    function ItemEditPageModule() {
    }
    ItemEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEditPage */]),
            ],
        })
    ], ItemEditPageModule);
    return ItemEditPageModule;
}());

//# sourceMappingURL=item-edit.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Items } from '../../providers/providers';


// import { TranslateService } from '@ngx-translate/core';

var ItemEditPage = (function () {
    function ItemEditPage(navCtrl, navParams, viewCtrl, formBuilder, camera, firebaseServiceProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.firebaseServiceProvider = firebaseServiceProvider;
        this.toastCtrl = toastCtrl;
        this.item = navParams.get('item') || {};
        console.log('item received: ', this.item);
        this.form = formBuilder.group({
            profilePic: [this.item.profilePic],
            serial: [this.item.serial, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: [this.item.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            price: [this.item.price, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            isFavorite: [this.item.isFavorite || false],
            inStock: [this.item.inStock || false],
            isActive: [this.item.isActive || false],
            description: [this.item.description]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemEditPage.prototype.updateItem = function () {
        console.log('this.form:', this.form);
        var prod = Object.assign({}, this.item, this.form.value);
        // this.item = this.form.value;
        // if(this.firebaseServiceProvider.validateProduct(this.form)){
        prod.updatedOn = new Date().toISOString();
        this.firebaseServiceProvider.updateProduct(prod);
        //this.productItemRef$.update(productItem);
        var toast = this.toastCtrl.create({
            message: 'Data Updated Successfully.',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.pop();
        // }
        // else{
        //   this.presentToast('Please Enter mandatory fields!');
        // }
    };
    ItemEditPage.prototype.ionViewDidLoad = function () {
    };
    ItemEditPage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ItemEditPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ItemEditPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemEditPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ItemEditPage.prototype, "fileInput", void 0);
    ItemEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-edit',template:/*ion-inline-start:"E:\Tutorials\Ionic\ionic3\ionic3SampleApp\src\pages\item-edit\item-edit.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{ item.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="updateItem()">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()" >\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          <!-- {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }} -->Add Image\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" \n      *ngIf="this.form.controls.profilePic.value"></div>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="serial" formControlName="serial"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="name" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="price" formControlName="price"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Add to Favorite</ion-label>\n        <ion-icon name="heart" color="light" item-end *ngIf="!this.form.controls.isFavorite.value" (click)="this.form.controls.isFavorite.value = true;"></ion-icon>\n        <ion-icon name="heart" color="danger" item-end *ngIf="this.form.controls.isFavorite.value" (click)="this.form.controls.isFavorite.value = false;"></ion-icon> \n      </ion-item>\n    \n      <ion-item>\n        <ion-label>In Stock</ion-label>\n        <ion-toggle formControlName="inStock"></ion-toggle>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>Is Expired</ion-label>\n        <ion-toggle formControlName="isActive"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-input type="text" placeholder="description" formControlName="description"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <button type="submit" ion-button color="primary" block [disabled]="!isReadyToSave">Submit</button>\n    </div>\n\n  </form>\n\n\n  <!-- <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + item.profilePic + \')\'">\n  </div>\n\n  <div class="item-detail" padding>\n    <h2>{{item.serial}}.{{item.name}}</h2>\n    <h2>{{item.price | currency: \'Rs \'}}</h2>\n    <p>{{item.description}}</p>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"E:\Tutorials\Ionic\ionic3\ionic3SampleApp\src\pages\item-edit\item-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ItemEditPage);
    return ItemEditPage;
}());

//# sourceMappingURL=item-edit.js.map

/***/ })

});
//# sourceMappingURL=10.js.map