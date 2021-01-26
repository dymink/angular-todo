import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task} from '../interfaces/task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  // title: string;
  // description: string = "";

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  tasks: Task[] = []

  constructor() { }

  // updateTitle(event) {
  //   this.title = event.target.value;
  //   console.log(event.target.value);
  // }

  ngOnInit(): void {
  }

  addTask(){
    const title = this.form.controls['title'];
    const description = this.form.controls['description'];
    const id = Math.random() * 10000;

    console.log(title)
    console.log(description)

    this.tasks.push({
      title: title.value,
      description: description.value,
      id
    });

    title.setValue('');
    description.setValue('');

  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter(t => {
      t.id === id;
    });
  }

}
