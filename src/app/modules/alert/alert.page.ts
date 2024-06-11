import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.navigateByUrl('/alert/action')
  }

}
