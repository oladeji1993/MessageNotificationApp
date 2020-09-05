import { LogoutComponent } from './../../logout/logout/logout.component';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  constructor( 
    private router: Router,
    private alertController: AlertController,
    private logoutComponent: LogoutComponent,
    private modalController: ModalController,) { }

  ngOnInit() {
  }

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

  async Logout() {
    const modal = await this.modalController.create({
      component: LogoutComponent ,
      cssClass: 'logout-custom',
      backdropDismiss: false
    });
    return await modal.present();
  }


  gotoNoti(){
    this.router.navigate(['fabpage'])
  }

}
