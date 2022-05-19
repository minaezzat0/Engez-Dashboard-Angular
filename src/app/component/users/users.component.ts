import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  constructor(private userService: UsersService ,private router: Router ,  private http: HttpClient) { }
// @Inject(String)
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.usersList = users;
    });
  }

  userDetails(userID:number)
  {
    this.router.navigate(['/component/user',userID])
  }
 editUser(userID:number)
  {
    this.router.navigate(['/component/edit-user',userID])
  }
}


