import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {MatDialog} from "@angular/material";
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  public form: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit() {
    this.form = this.fb.group( {
      title: ['', Validators.required],
      description: ['']
    } );
  }
  onSubmit() {
    let projectData = {
      title: this.form.controls.title.value,
      desc: this.form.controls.description.value,
      uid: localStorage.getItem('userID')
    }
    this.projectService.addProject(projectData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    this.dialog.closeAll();
  }
}
