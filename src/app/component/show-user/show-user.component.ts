import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { Location } from '@angular/common';
import { Job } from '../../models/job';
import { JobsService } from './../../services/jobs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  userID: number = 0;
  user: User = {} as User;
  job: Job = {} as Job;
  userJobs: Job[] = [];
  private subscription!: Subscription;

  constructor(private activatedRoute:ActivatedRoute ,
    private userService:UsersService ,private jobService:JobsService, private location:Location ,
    private router: Router) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.userID = Number(params.get("id"));
      this.userService.getUserByID(this.userID)?.subscribe(found => { this.user = found });
      this.jobService.getJobsByUserID(this.userID)?.subscribe(found => { this.userJobs = found } );
  });
  }

  // ngOnDestroy(): void
  // {
  //   this.subscription.unsubscribe();
  // }
}
