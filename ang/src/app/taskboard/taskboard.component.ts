/* tslint:disable:max-line-length */
import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddTaskComponent } from './add-task/add-task.component';
import {TaskService} from '../services/task.service';
import {EditTaskComponent} from './edit-task/edit-task.component';

interface Tasks {
  title: string;
  description: string;
  class?: string;
}

interface Taskboard {
  title: string;
  tasks: Tasks[];
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  taskboard: Taskboard[] = [
    {
    title: 'New',
    tasks: []
  },

     {
    title: 'In Process',
    tasks: [{
      title: 'QOS Assessment',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
    }, {
      title: 'Schedule new tasks',
      description: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-warning'
    }, {
      title: 'Add dashboard variants',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    }, {
      title: 'Extended color scheme support',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
    }, {
      title: 'Merge unit tests',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      class: 'task-status-info'
    }, {
      title: 'Test final version',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    }]
  },
    {
    title: 'ready to test',
    tasks: [{
      title: 'Integrate Angular 4',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    }, {
      title: 'Additional fields',
      description: 'Donec id elit non mi porta gravida at eget metus.'
    }, {
      title: 'Draggable task board',
      description: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-danger'
    }, {
      title: 'Setup CI server',
      description: 'Maecenas faucibus mollis interdum.'
    }, {
      title: 'Assign new tasks',
      description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      class: 'task-status-success'
    }, {
      title: 'Contact administrator',
      description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    }, {
      title: 'Commit changes',
      description: 'Aenean lacinia bibendum nulla sed consectetur.'
    }]
  },
    {
      title: 'to review',
      tasks: [{
        title: 'Integrate Angular 4',
        description: 'Nulla vitae elit libero, a pharetra augue.'
      }, {
        title: 'Additional fields',
        description: 'Donec id elit non mi porta gravida at eget metus.'
      }, {
        title: 'Draggable task board',
        description: 'Sed posuere consectetur est at lobortis.',
        class: 'task-status-danger'
      }, {
        title: 'Setup CI server',
        description: 'Maecenas faucibus mollis interdum.'
      }, {
        title: 'Assign new tasks',
        description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
        class: 'task-status-success'
      }, {
        title: 'Contact administrator',
        description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
      }, {
        title: 'Commit changes',
        description: 'Aenean lacinia bibendum nulla sed consectetur.'
      }]
    },
    {
    title: 'Complete',
    tasks: [{
      title: 'Store new files',
      description: 'Sed posuere consectetur est at lobortis.'
    }, {
      title: 'Build landing page',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
    }, {
      title: 'Setup basic layout',
      description: 'Vestibulum id ligula porta felis euismod semper.',
      class: 'task-status-info'
    }, {
      title: 'Graphical fixes',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
    }, {
      title: 'Email alerts',
      description: 'Donec sed odio dui.'
    }]
  }];
  dialogRef: MatDialogRef<AddTaskComponent> | null;
  dialogEditRef: MatDialogRef<EditTaskComponent> | null;
  projectID;
  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit() {
    // this.taskboard.push({"title": "new card"})
    this.showAllTask();
  }
  showAllTask() {
    this.taskService.showTask()
      .then((response) => {
        console.log(response);
        response.forEach((tasks) => {
          let task = {
            title: tasks.title,
            description: tasks.description,
            users: tasks.uid,
            attechment: tasks.attechment
          };
          this.taskboard.forEach((tsk) => {
            if (tsk.title === 'New') {
              tsk.tasks.push(task);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  addTask() {
    this.dialogRef = this.dialog.open(AddTaskComponent);

    this.dialogRef.beforeClose().subscribe((result: string) => {

    });
    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.showAllTask();
      this.dialogRef = null;
    });
  }
  editTask(task) {
    debugger
    this.dialogEditRef = this.dialog.open(EditTaskComponent, {
      data: task,
    });

    this.dialogEditRef.beforeClose().subscribe((result: string) => {

    });
    this.dialogEditRef.afterClosed().subscribe((result: string) => {
      this.showAllTask();
      this.dialogEditRef = null;
    });
  }
}
