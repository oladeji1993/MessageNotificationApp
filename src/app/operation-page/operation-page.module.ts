import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationPagePageRoutingModule } from './operation-page-routing.module';

import { OperationPagePage } from './operation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationPagePageRoutingModule
  ],
  declarations: [OperationPagePage]
})
export class OperationPagePageModule {}
