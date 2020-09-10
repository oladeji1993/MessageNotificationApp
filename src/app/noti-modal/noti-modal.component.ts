import { SharedData } from './../../Business/shared';
import { Constants } from './../../Business/constant';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noti-modal',
  templateUrl: './noti-modal.component.html',
  styleUrls: ['./noti-modal.component.scss'],
})
export class NotiModalComponent implements OnInit {

  forgot;
  appPassword;
  errorMsg;
  welcomeMsg;
  modalHeader;
  constructor(
    private storage: Storage,
    private modalController: ModalController,
    private router: Router,
    private constants: Constants,
    public sharedData: SharedData,
    public navCtrl: NavController
    ) {
      console.log(this.constants.appPassword());
      this.appPassword = this.constants.appPassword();
      // this.storage.clear();
      this.setHeader();
    }

  ngOnInit() {}

  setHeader() {
    console.log(this.sharedData.modalHeader)
    if(this.sharedData.modalHeader){
      this.modalHeader = "CHANGE PIN"
      // this.storage.clear();
    }
    if(!this.sharedData.modalHeader) {
      this.modalHeader = "WELCOME"
    } else if (this.sharedData.modalHeader === 'forgot-password') {
      this.modalHeader = "Forgot Password"
    }
  }

  reset() {
    if(this.forgot === this.appPassword) {
      console.log("Correct");
      this.modalController.dismiss();
    } else {
      console.log("Ode");
      this.sharedData.uniquePin = 'Invalid PIN';
    }
  }

  forgotChange(){
    this.errorMsg = null;
  }

  doDismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  dismiss(location) {
    if(location && location === 'settings') {
      this.navCtrl.back();
      this.doDismiss()
    } else {
      this.doDismiss();
    }
  }
}

