import { LogoutComponent } from './../../logout/logout/logout.component';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  catchData;
  constructor( private actionSheetController: ActionSheetController,
     private router: Router,
     private logoutComponent: LogoutComponent,
     private modalController: ModalController) { }

  ngOnInit() {
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
    this.router.navigate(['fabpage']);
  }

}
