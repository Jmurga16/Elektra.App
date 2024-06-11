import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/components/loading/services/loading.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {


  dataInput = [
    { id: 1, imageUrl: "assets/foco.gif", text: "Cargando..." },
    { id: 2, imageUrl: "assets/caminante.gif", text: "Espere por favor..." },
    { id: 3, imageUrl: "assets/timer.gif", text: "Justo a tiempo..." },
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
  ) {

  }

  ngOnInit() {
    //this.loadingService.show();

  }

  showAlert() {
    this.loadingService.showData(this.dataInput);

    setTimeout(() => {
      this.loadingService.hide();
      this.router.navigate(['../message'], {
        relativeTo: this.activatedRoute,
      });
    }, 8000);

  }

  showAlertIon() {
    this.loadingService.showLoading();

    setTimeout(() => {
      this.loadingService.hideLoading();
      this.router.navigate(['../message'], {
        relativeTo: this.activatedRoute,
      });
    }, 5000);

  }


}
