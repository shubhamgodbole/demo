import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {TaskService} from '../../services/task.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  employee: any;
  public form: FormGroup;
  fildata;
  tempPath;
  chk;
  formData = new FormData();
  utid;
  users: any = [];
  constructor(public dialog: MatDialog, private fb: FormBuilder, private authService: AuthService, private taskServise: TaskService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('editModal', data);
  }

  ngOnInit() {
    this.utid = localStorage.getItem('userTypeID');
    this.getUsers();
    this.form = this.fb.group( {
      title: [this.data.title, Validators.required],
      description: [this.data.description],
      user: [this.data.uid],
      attechment: ['']
    } );
  }

  getUsers() {
    this.authService.getAllUser()
      .then((response) => {
        debugger
        response.forEach((user) => {
          debugger
          let uids = this.data.users.split(',');
          uids.forEach((uid) => {
            debugger
            if (user.uid === parseInt(uid)) {
              debugger
              this.users.push(user);
            }
          });
        });
        this.employee = response;
        console.log('user for this task', this.users);
      })
      .then((error) => {
        console.log(error);
      });
  }

}
