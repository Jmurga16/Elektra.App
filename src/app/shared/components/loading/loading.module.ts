import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './services/loading.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, IonicModule.forRoot({ innerHTMLTemplatesEnabled: true })],
  exports: [LoadingComponent],
  providers: [LoadingService]
})
export class LoadingModule { }
