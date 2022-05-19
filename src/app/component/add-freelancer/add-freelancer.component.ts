import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.css']
})
export class AddFreelancerComponent implements OnInit {

  newUser: User={} as User;
  catList: Category[]=[];

  constructor(private userService: UsersService ,private catService :CategoriesService, private router: Router ,  private http: HttpClient) { }

  ngOnInit(): void {
    this.catService.getCategories().subscribe(cats=>{
      this.catList=cats;
    });
    this.newUser.role = "freelancer";
  }

  addFreelancer()
  {
    this.userService.addUser(this.newUser).subscribe({
      next:(prd)=>{
        Swal.fire({
          title: 'Success!',
          text: 'User Added Successfully',
          icon: 'success',
          cancelButtonText: "Ok",
          // iconColor:'red'
          // icon="question"
          // showConfirmButton
          // showCancelButton:"false"
          // cancelButtonText:"Cancel"
          // imageUrl:"/sssss/ss" ,
          // imageWidth:"200px"
          // confirmButtonText: 'ok' ,
          // [showCancelButton]="true"
          // [focusCancel]="true"
        })
        this.router.navigate(['component/freelancers']);
      },
      error: (err)=>{
        alert(err.message);
      }
    })
  }
}
