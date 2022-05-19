import { Job } from './../../../models/job';
import { DashboardService } from './../../../services/dashboard.service';
import { JobsService } from './../../../services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { Feeds,Feed } from './feeds-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {

  feeds:Feed[];
  LatestJobs: Job[] = [];

  constructor(private dashService: DashboardService ,private router: Router ,  private http: HttpClient) {

    this.feeds = Feeds;
  }

  ngOnInit(): void {
    this.dashService.getLatestJobs().subscribe(msgs => {
      this.LatestJobs = msgs;
    });
  }

}
