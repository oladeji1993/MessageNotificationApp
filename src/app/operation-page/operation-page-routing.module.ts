import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationPagePage } from './operation-page.page';

const routes: Routes = [
  {
    path: '',
    component: OperationPagePage,
    children:[
      {
        path:'notification',
        loadChildren:() => import('../pages/notification/notification.module').then
        (m => m.NotificationPageModule)
      },

      {
        path:'specific',
        loadChildren:() => import('../pages/specific/specific.module').then
        (m => m.SpecificPageModule)
      },

      {
        path:'staff',
        loadChildren:() => import('../pages/staff/staff.module').then
      (m => m.StaffPageModule)
      },

      {
        path:'fabpage',
        loadChildren:() => import('../pages/fabpage/fabpage.module').then
      (m => m.FabpagePageModule)
      },
      {
        path: '',
        redirectTo: 'notification',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationPagePageRoutingModule {}
