import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LogoutComponent } from './../../logout/logout/logout.component';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.page.html',
  styleUrls: ['./specific.page.scss'],
})
export class SpecificPage implements OnInit {

  constructor( 
    private modalController: ModalController, 
    private router: Router,
    private alertController: AlertController,
    private logoutComponent: LogoutComponent,) { }

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
