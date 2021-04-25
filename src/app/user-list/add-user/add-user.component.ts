import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, OnChanges {
  @Output() addUser = new EventEmitter<UserModel>();
  @Input() user: UserModel;
  @Output() isTableShow = new EventEmitter();
  userForm: FormGroup;
  isNew = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      songTitle: ['', Validators.required],
      singer: ['', Validators.required],
      views: ['', Validators.required],
    });
  }

  ngOnChanges(changes: any) {
    let songTitle = '';
    let singer = '';
    let views = null;

    this.user = changes.user.currentValue;
    if (this.user) {
      songTitle = this.user.songTitle;
      singer = this.user.singer;
      views = this.user.views;
      this.isNew = false;
    } else {
      this.isNew = true
    }

    if(this.userForm) {
      this.userForm.controls['songTitle'].setValue(songTitle);
      this.userForm.controls['singer'].setValue(singer);
      this.userForm.controls['views'].setValue(views);
    }
  }

  add(): void {
    if (!this.userForm.valid) {
      return;
    }

    if (this.isNew) {
      this.addUser.emit({
        id: null,
        songTitle: this.userForm.value.songTitle,
        singer: this.userForm.value.singer,
        views: this.userForm.value.views,
        isPublished: true,
      });
    } else {
      this.user.songTitle = this.userForm.value.songTitle;
      this.user.singer = this.userForm.value.singer;
      this.user.views = this.userForm.value.views;
      this.addUser.emit(this.user);
    }
    this.isTableShow.emit(true);
    this.reset();
  }

  reset() {
    this.userForm.reset();
    this.isNew = true;
  }
}
