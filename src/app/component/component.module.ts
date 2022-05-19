import { AddUserComponent } from './add-user/add-user.component';
import { JobsComponent } from './jobs/jobs.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowFreelancerComponent } from './show-freelancer/show-freelancer.component';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { UsersComponent } from './users/users.component';
import { EditFreelancerComponent } from './edit-freelancer/edit-freelancer.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ContractsComponent } from './contracts/contracts.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   // UsersComponent,
  ],
  declarations: [

    EditUserComponent,
    UsersComponent,
    ShowUserComponent,
    AddUserComponent,

    FreelancersComponent ,
    AddFreelancerComponent,
    EditFreelancerComponent,
    ShowFreelancerComponent,

    JobsComponent,
    ContractsComponent,
    MessagesComponent ,

    EditProfileComponent ,


  ]
})
export class ComponentsModule { }
