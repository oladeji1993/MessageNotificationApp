import { SharedData } from './../../Business/shared';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotiModalComponent } from 'src/app/noti-modal/noti-modal.component';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pin = '';
  confirmPin;
  auth;
  forgot;
  pass;
  forgotPin;
  welcomeMsg;
  errorMsg;
  counter = 0;
  constructor( private alertController: AlertController, 
    private router: Router,
    private modalController: ModalController,
    private storage: Storage,
    public sharedData: SharedData,
    public navCtrl: NavController,
  ) {} 

  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.init();
  }

  goToLogin(){
    this.router.navigate(['operation-page']);
  }

  key(val) {
    if (this.pin.length < 4) {
      this.pin = this.pin + val;
      console.log(this.pin);
      if (this.pin.length === 4) {
        if (!this.auth) {
          this.counter = this.counter + 1;
          if(this.counter < 2) {
            this.confirmPin = this.pin;
            this.pin = '';
            this.sharedData.createPin = 'CONFIRM PIN'
          } else if (this.pin === this.confirmPin) {
            this.storage.set('password', this.pin).then(res => {
              console.log("Password set successfully");
              this.goToLogin();
            })
          } else if(this.pin !== this.confirmPin) {
            this.counter = this.counter - 1;
            this.pin = '';
            console.log("Pin does not match");
          }
        } else if (this.auth && this.auth === this.pin) {
          this.goToLogin();
        } else {
          this.sharedData.uniquePin = 'Invalid PIN';
          console.log('Invalid Pin');
        }
      }
    }
  }

  remove() {
    const arr = [];
    if (this.pin) {
      for (let i = 0; this.pin.length > i; i++) {
        arr.push(this.pin[i]);
      }
    }
    console.log(arr);
    arr.pop();
    console.log(arr);
    this.pin = arr.join('');
    console.log(this.pin);
  }

  async lauchModal(option) {
    // if(this.sharedData.forgotPin){
    //   this.later()
    // }
    this.sharedData.location = null;
    this.sharedData.modalHeader = option;
    const modal = await this.modalController.create({
      component: NotiModalComponent ,
      cssClass: 'my-custom-class',
      backdropDismiss: false,
    });
    return await modal.present();
  }


  init() {
    this.pin = '';
    this.auth = '',
    this.storage.get('password').then(pin => {
      if(pin && !this.sharedData.location) {
        this.auth = pin;
        console.log(pin)
        this.sharedData.createPin = 'Enter PIN'
        this.sharedData.uniquePin = 'Enter 4 unique Pin';
        this.sharedData.forgotPin = 'Forgot PIN';
      } else {
        this.sharedData.createPin = 'CREATE PIN'
        this.sharedData.uniquePin = 'Enter PIN';
        this.sharedData.forgotPin = 'Later';
        console.log(this.sharedData.uniquePin);
        if(!this.sharedData.location) {
          this.lauchModal(null);
        }
       }
     });
     }


    later(){
      this.navCtrl.back();

    }
}
