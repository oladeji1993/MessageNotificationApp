import { SharedData } from './../../Business/shared';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
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
  auth;
  forgot;
  pass;
  constructor( private alertController: AlertController, 
    private router: Router,
    private modalController: ModalController,
    private storage: Storage,
    public sharedData: SharedData
  ) {

      this.init();
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pin = '';
    this.auth = localStorage.getItem('pin');
    console.log(this.auth);
  }

  goToLogin(){
    this.router.navigate(['operation-page']);
  }

  key(val) {
    if ( this.pin.length < 4) {
      this.pin = this.pin + val;
      console.log(this.pin);
      if ( this.pin.length === 4) {
        if (!this.auth) {
          localStorage.setItem('pin', this.pin);
          this.goToLogin();
        } else if (this.auth && this.auth === this.pin) {
          this.goToLogin();
        } else {
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

  async forgotModal() {
    const modal = await this.modalController.create({
      component: NotiModalComponent ,
      cssClass: 'my-custom-class',
      backdropDismiss: false
    });
    return await modal.present();
  }

  init() {
    this.storage.get('password').then(pass => {
      if(pass) {
        console.log(pass)
      } else {
        this.sharedData.uniquePin = 'Enter unique Pin';
        console.log(this.sharedData.uniquePin)
        this.forgotModal();
      }
    })
    // if(!this.pass) {
    //   this.storage.get('password');
    //   this.router.navigate(['home']);
    // } else{
    //   console.log('invalid pin')
    // }

  }
}
