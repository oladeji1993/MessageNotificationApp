import { Storage } from '@ionic/storage';
import { SharedData } from './../../../Business/shared';
import { Router } from '@angular/router';
import { LogoutComponent } from './../../logout/logout/logout.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NotiModalComponent } from 'src/app/noti-modal/noti-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  modalHeader;
  reset;
  forgot;
  constructor( 
    private modalController: ModalController,
    private router: Router,
    public sharedData: SharedData,
    private Storage: Storage,
    ) {  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    
  }

  async Logout() {
    const modal = await this.modalController.create({
      component: LogoutComponent ,
      cssClass: 'logout-custom',
      backdropDismiss: false
     
    });
    
    return await modal.present();
  }

  resetPin(){
    this.sharedData.location = 'settings'
    this.lauchModal();
    this.router.navigate(['home']);
  }

  async lauchModal() {
    this.sharedData.modalHeader = "reset pin"
    const modal = await this.modalController.create({
      component: NotiModalComponent ,
      cssClass: 'my-custom-class',
      backdropDismiss: false,
    });
    return await modal.present();
  }


  // goHome(){
  //   this.router.navigate(['home']);
  //   this.lauchModal(null);
  // }

  // setHeader(){

  // }


  

  

}
