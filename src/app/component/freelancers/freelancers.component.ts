import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss']
})
export class FreelancersComponent implements OnInit {

  freelancersList:User[] = [];
  constructor(private userService: UsersService ,private router: Router ,  private http: HttpClient) { }

  ngOnInit() {
    this.userService.getAllFreelancers().subscribe(freelancers => {
      this.freelancersList = freelancers;
    });
  }
  freelancerDetails(freelancerID:number)
  {
    this.router.navigate(['/component/freelancer',freelancerID])
  }
  editFreelancer(freelancerID:number)
  {
    this.router.navigate(['/component/edit-freelancer',freelancerID])
  }
}
