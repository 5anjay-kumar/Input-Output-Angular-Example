import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [UserListComponent, AddUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserListRoutingModule,
  ],
})
export class UserListModule {}
