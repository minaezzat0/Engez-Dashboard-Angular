import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { User } from '../../models/user';
import { Category } from '../../models/category';
import { Location } from '@angular/common';
import { JobsService } from './../../services/jobs.service';
import { UsersService } from './../../services/users.service';
import { CategoriesService } from './../../services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-freelancer',
  templateUrl: './show-freelancer.component.html',
  styleUrls: ['./show-freelancer.component.scss']
})
export class ShowFreelancerComponent implements OnInit {

  userID: number = 0 ;
  //catID : number = 0 ;
  user: User = {} as User;
  userJobs: Job[] = [];
  category :Category= {} as Category;
  private subscription!: Subscription;

  constructor(private activatedRoute:ActivatedRoute ,
    private userService:UsersService ,private jobService:JobsService,   private catService:CategoriesService, private location:Location ,
    private router: Router ) { }


  ngOnInit()
  {
    this.activatedRoute.paramMap.subscribe((params) => {

      this.userID = Number(params.get("id"));

      this.userService.getUserByID(this.userID)?.subscribe(found => { this.user = found } );

      this.jobService.getJobsByUserID(this.userID)?.subscribe(found => { this.userJobs = found } );
      });
  //this.getJob(this.userID);
  }

  // getJob(catID:number)
  // {
  //    this.catService.getCatByID(catID)?.subscribe(found => { this.category = found });
  //    return this.category.name;
  // }

  // ngOnDestroy(): void
  // {
  //   this.subscription.unsubscribe();
  // }
}
