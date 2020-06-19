import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.onFindTodos();
  }

  onFindTodos() {
    this.data.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onTodoDeleted(id: number | string) {
    this.data.deleteTodo(id);
  }
}
