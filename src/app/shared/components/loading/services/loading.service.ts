import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class LoadingService {

  loading: any
  isLoading$: Subject<boolean>;

  dataLoading$: Subject<any>;

  constructor(
    private loadingCtrl: LoadingController
  ) {
    this.isLoading$ = new Subject<boolean>();
    this.dataLoading$ = new Subject<any>();
  }

  show(): void {
    this.isLoading$.next(true);
  }

  hide(): void {
    this.isLoading$.next(false);
  }

  showData(dataInput: any): void {
    this.isLoading$.next(true);
    this.dataLoading$.next(dataInput);
  }

  hideData(): void {
    this.dataLoading$.next([]);
  }


  async showLoading() {
    this.loading = await this.loadingCtrl.create({

      message: '<ion-img src="https://docs-demo.ionic.io/assets/madison.jpg" alt="loading..."></ion-img>',
      cssClass: 'scale-down-center',
      translucent: true,
      showBackdrop: false,
      spinner: null,

    });

    this.loading.present();
  }

  async hideLoading() {
    await this.loadingCtrl.dismiss()
  }

}
