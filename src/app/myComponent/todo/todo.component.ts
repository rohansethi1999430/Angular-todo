import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos=[
      {
      sno:1,
      title:"This is Title 1",
      desc:"Description",
      active:true
    },
    {
      sno:2,
      title:"This is Title 2",
      desc:"Description",
      active:true
    },
  ]
   }

  ngOnInit(): void {
  }

}
