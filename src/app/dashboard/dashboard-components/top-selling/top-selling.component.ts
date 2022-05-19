import { Component, OnInit } from '@angular/core';
import {Product,TopSelling} from './top-selling-data';
import { DashboardService } from './../../../services/dashboard.service';
import { Dashboard } from './../../../models/dashboard';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  topSelling:Product[];
  topFreelancer: Dashboard;

  constructor(private dashService: DashboardService ,private router: Router ,  private http: HttpClient) {

    this.topSelling=TopSelling;
  }

  ngOnInit(): void {
    this.dashService.dash().subscribe(dash => {
      this.topFreelancer = dash;
    });
  }
}
