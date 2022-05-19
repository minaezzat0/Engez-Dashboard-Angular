import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../models/job';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobList: Job[] = [];
  constructor(private jobService: JobsService ,private router: Router ,  private http: HttpClient) { }
// @Inject(String)
  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(jobs => {
      this.jobList = jobs;
    });
  }

  jobDetails(jobID:number)
  {
    this.router.navigate(['/component/job',jobID])
  }


}
