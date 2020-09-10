import { SharedData } from './../../../Business/shared';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,
    public sharedData: SharedData
  ) { }

  ngOnInit() {}


  async confirmClose() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure You want to Logout',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['home']);
            this.modalController.dismiss();
            this.sharedData.location = null;
          }
        },
        {
          text: 'No',
          cssClass: 'secondary',
          handler: (blah) => {
            this.alertController.dismiss();
            this.modalController.dismiss();
          }
        }]
      });
      await alert.present();
  }



  goToSettings(){
    this.router.navigate(['settings']);
    this.modalController.dismiss();
  }

}
