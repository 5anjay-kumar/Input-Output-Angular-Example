import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: UserModel[] = [];
  user: UserModel;
  id = 1;
  isTableShow;
  constructor() {}

  ngOnInit(): void {}

  getUser(user: UserModel) {
    if (!user.id) {
      (user.id = this.id++), this.userList.push(user);
      console.log('Show table: ' + this.isTableShow);
    } else {
      this.user = null;
    }
  }

  edit(user: UserModel) {
    this.user = user;
  }

  showTable(isTableShow) {
    this.isTableShow = isTableShow;
  }

  delete(index) {
    if (index !== -1) {
      this.userList.splice(index, 1);
    } else if (index === 0) {
      this.isTableShow = false;
    }
  }
}
