
import { AddUserComponent } from './add-user/add-user.component';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import { ShowFreelancerComponent } from './show-freelancer/show-freelancer.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { EditFreelancerComponent } from './edit-freelancer/edit-freelancer.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ContractsComponent } from './contracts/contracts.component';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { MessagesComponent } from './messages/messages.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
      {
				path: 'users',
				component: UsersComponent
			},
      {
				path: 'freelancers',
				component: FreelancersComponent
			},
      {
				path: 'contracts',
				component: ContractsComponent
			},
      {
				path: 'jobs',
				component: JobsComponent
			},
      {
				path: 'messages',
				component: MessagesComponent
			},
      {
				path: 'edit-profile',
				component: EditProfileComponent
			},
      {
				path: 'edit-user/:id',
				component: EditUserComponent
			},
      {
				path: 'edit-freelancer/:id',
				component: EditFreelancerComponent
			},
      {
				path: 'user/:id',
				component: ShowUserComponent
			},
      {
				path: 'freelancer/:id',
				component: ShowFreelancerComponent
			},
      {
				path: 'new-freelancer',
				component: AddFreelancerComponent
			},
      {
				path: 'new-user',
				component: AddUserComponent
			} ,

		]
	}
];
