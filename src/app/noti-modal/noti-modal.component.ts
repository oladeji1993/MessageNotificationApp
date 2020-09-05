import { SharedData } from './../../Business/shared';
import { Constants } from './../../Business/constant';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
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
  constructor(
    private storage: Storage,
    private modalController: ModalController,
    private router: Router,
    private constants: Constants,
    public sharedData: SharedData
    ) {
      console.log(this.constants.appPassword());
      this.appPassword = this.constants.appPassword();
      // this.storage.clear()
    }

  ngOnInit() {}

  reset() {
    if(this.forgot === this.appPassword) {
      console.log("Correct");
      this.modalController.dismiss();
      this.sharedData.uniquePin = 'Enter your 4 digits pin';
    } else {
      console.log("Ode");
      this.errorMsg = "Incorrect Password";
    }

    // const saveItem = this.forgot;
    // console.log(this.forgot)
    // this.storage.set('password', this.forgot);
    // this.router.navigate(['']);
  }

  forgotChange(){
    this.errorMsg = null;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
}
}

