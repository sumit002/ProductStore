import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

// import { Items } from '../../providers/providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { ProductItem } from './../../models/product';
// import { TranslateService } from '@ngx-translate/core';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';


@IonicPage()
@Component({
  selector: 'page-item-edit',
  templateUrl: 'item-edit.html',
})
export class ItemEditPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  // item: any;
  // prod: ProductItem;

  form: FormGroup;
  item: ProductItem;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    formBuilder: FormBuilder, public camera: Camera,
    public firebaseServiceProvider: FirebaseServiceProvider,public toastCtrl: ToastController) {
    this.item = navParams.get('item') || {} as ProductItem;
    console.log('item received: ', this.item);

    this.form = formBuilder.group({
      profilePic: [this.item.profilePic],
      serial: [this.item.serial, Validators.required],
      name: [this.item.name, Validators.required],
      price: [this.item.price, Validators.required],
      isFavorite: [this.item.isFavorite || false],
      inStock: [this.item.inStock || false],
      isActive: [this.item.isActive || false],
      description: [this.item.description]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  updateItem() {
    console.log('this.form:', this.form);
    let prod = Object.assign({}, this.item, this.form.value);
    // this.item = this.form.value;
    // if(this.firebaseServiceProvider.validateProduct(this.form)){
      prod.updatedOn = new Date().toISOString();
      this.firebaseServiceProvider.updateProduct(prod);
      //this.productItemRef$.update(productItem);
      let toast = this.toastCtrl.create({
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
  }

  ionViewDidLoad() {
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

}
