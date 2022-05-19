import { DashboardService } from './../../../services/dashboard.service';
import { Dashboard } from './../../../models/dashboard';
import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[];
  dashboardData : Dashboard  ;
  constructor(private dashService : DashboardService , router: Router , private http: HttpClient) {

    this.topcards=topcards;
  }



  ngOnInit(): void {
    this.dashService.dash().subscribe(dash => {
      this.dashboardData = dash;
    });
  }

}
