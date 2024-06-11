import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPage } from './alert.page';
import { ActionComponent } from './pages/action/action.component';
import { MessageComponent } from './pages/message/message.component';

const routes: Routes = [
  {
    path: '',
    component: AlertPage,
    children: [
      {
        path: 'action',
        component: ActionComponent
      },
      {
        path: 'message',
        component: MessageComponent
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPageRoutingModule { }
