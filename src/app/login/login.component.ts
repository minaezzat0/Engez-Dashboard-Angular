import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthServiceService } from 'app/services/AuthService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  login_user: any = localStorage.getItem('login');
  vaild_login: number = 1;

  constructor() {
    //private router: Router, private authservice: AuthServiceService
  }

  ngOnInit(): void {


    this.initForm();

  }

  initForm() {
    // this.formGroup = new FormGroup({
    //   email: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required])

    // });

  }

  // login() {
  //   if (this.formGroup.valid) {
  //     this.authservice.auth_login(this.formGroup.value).subscribe
  //       ({
  //         next: (data) => {
  //           console.log(data);
  //           if (data != null) {
  //             // console.log("mina");
  //             this.vaild_login = 1;
  //             localStorage.setItem('login', JSON.stringify([data]));
  //             this.router.navigate(['/home']);
  //           } else {

  //             this.vaild_login = 0;

  //           }
  //         },
  //         error: () => {

  //           this.vaild_login = 0;

  //         }

  //       });
  //   }
  // }
}
