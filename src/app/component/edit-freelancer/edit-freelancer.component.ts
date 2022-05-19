import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { User } from '../../models/user';
import { Category } from '../../models/category';
import { Location } from '@angular/common';
import { JobsService } from './../../services/jobs.service';
import { UsersService } from './../../services/users.service';
import { CategoriesService } from './../../services/categories.service';


@Component({
  selector: 'app-edit-freelancer',
  templateUrl: './edit-freelancer.component.html',
  styleUrls: ['./edit-freelancer.component.css']
})

export class EditFreelancerComponent implements OnInit {

  userID: number = 0 ;

  newUser: User={} as User ;

  constructor(private activatedRoute:ActivatedRoute ,
    private userService:UsersService ,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {

      this.userID = Number(params.get("id"));

      this.userService.getUserByID(this.userID)?.subscribe(found => { this.newUser = found } );


      });
  }
  editFreelancer()
  {
    this.userService.updateUser(this.newUser).subscribe({
      next:(res)=>{
        console.log(res);
          alert(" Freelancer updated successfully");
          this.router.navigate(['/component/freelancers']);
          },
        error:(err)=>{console.log(err)}
    });
  }
}
