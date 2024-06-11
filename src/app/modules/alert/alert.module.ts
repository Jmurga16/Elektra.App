import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';
import { ActionComponent } from './pages/action/action.component';
import { MessageComponent } from './pages/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
  ],
  declarations: [
    AlertPage,
    ActionComponent,
    MessageComponent
  ]
})
export class AlertPageModule {}
