import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import Swal from 'sweetalert2';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser: User={} as User ;
  catList: Category[]=[];


  constructor(private usersService: UsersService , private catService:CategoriesService,private router: Router ,  private http: HttpClient) { }

  ngOnInit() {
    this.catService.getCategories().subscribe(cats=>{
      this.catList=cats;
    });
    this.newUser.role = "users";
  }
  // openDialog()
  // {
  //   Swal.fire({
  //     title: 'Error!',
  //     text: 'Do you want to continue',
  //     icon: 'success'

  //     // iconColor:'red'
  //     // icon="question"
  //     // showConfirmButton
  //     // showCancelButton:"false"
  //     // cancelButtonText:"Cancel"
  //     // imageUrl:"/sssss/ss" ,
  //     // imageWidth:"200px"
  //     // confirmButtonText: 'ok' ,
  //     // [showCancelButton]="true"
  //     // [focusCancel]="true"
  //   })
  //   // const Toast = Swal.mixin({
  //   //   toast: true,
  //   //   position: 'top-end',
  //   //   showConfirmButton: false,
  //   //   timer: 3000,
  //   //   timerProgressBar: true,
  //   //   didOpen: (toast) => {
  //   //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //   //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   //   }
  //   // })

  //   // Toast.fire({
  //   //   icon: 'success',
  //   //   title: 'Signed in successfully'
  //   // })
  // }
  addNewUser()
  {
    this.usersService.addUser(this.newUser).subscribe({
      next:(prd)=>{
        Swal.fire({
          title: 'Success!',
          text: 'User Added Successfully',
          icon: 'success',
          //icon: 'error',
         //  showCancelButton:"true",
          cancelButtonText: "Ok",
    //       confirmButtonText:
    // '<i class="fa fa-thumbs-up"></i> Great!',
          //confirmButtonColor:"green"
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
        this.router.navigate(['/component/users']);
      },
      error: (err)=>{
        alert(err.message);
      }
    })
  }




}
