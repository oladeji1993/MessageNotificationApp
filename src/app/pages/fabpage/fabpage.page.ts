import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from './../../logout/logout/logout.component';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fabpage',
  templateUrl: './fabpage.page.html',
  styleUrls: ['./fabpage.page.scss'],
})
export class FabpagePage implements OnInit {

  constructor( 
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private logoutComponent: LogoutComponent,

    ) { }

  ngOnInit() {
  }

  gotoNoti(){
    this.router.navigate(['notification'])
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


}
