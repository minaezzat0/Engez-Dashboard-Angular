import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userID: number = 0 ;

  newUser: User={} as User ;

  constructor(private activatedRoute:ActivatedRoute ,
    private userService:UsersService ,
    private router: Router ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params) => {

      this.userID = Number(params.get("id"));

      this.userService.getUserByID(this.userID)?.subscribe(found => { this.newUser = found } );

      });
  }
  editUser()
  {
    this.userService.updateUser(this.newUser).subscribe({
      next:(res)=>{
        console.log(res);
          alert(" User updated successfully");
          this.router.navigate(['/component/users']);
          },
        error:(err)=>{console.log(err)}
    });
  }

}
