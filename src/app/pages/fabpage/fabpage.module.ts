import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabpagePageRoutingModule } from './fabpage-routing.module';

import { FabpagePage } from './fabpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabpagePageRoutingModule
  ],
  declarations: [FabpagePage]
})
export class FabpagePageModule {}
