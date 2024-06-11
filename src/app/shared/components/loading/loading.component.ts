import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { DataLoad } from '../../interfaces/data-load.interface';

@Component({
  selector: 'pre-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  private subscription: Subscription;

  dataLoad?: DataLoad

  counter = 1;
  lengthData = 0;


  constructor(
    private readonly loadingService: LoadingService,

  ) {
    this.subscription = new Subscription()
  }

  ngOnInit(): void {
    this.subscription = this.loadingService.isLoading$.subscribe(res => this.isLoading = res);

    this.subscription = this.loadingService.dataLoading$.subscribe((response: any) => {
      this.dataLoad = response[0];
      setInterval(() => this.reloadData(response), 2000)
    }
    );
  }


  reloadData(dataGroup: any) {

    this.lengthData = dataGroup.length

    this.dataLoad = dataGroup[this.counter];
    this.counter++

    if (this.counter >= this.lengthData) {
      this.counter = 0
    }
  }

  reloadData2(dataGroup: any) {
    console.log(dataGroup)
    this.isLoading = true;
    dataGroup.forEach((element: any) => {
      this.dataLoad = element
      setTimeout(() => {
        this.dataLoad = element
      }, 3000);
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
