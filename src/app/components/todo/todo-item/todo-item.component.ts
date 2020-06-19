import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onDelete = new EventEmitter<number | string>();
  done: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTodo() {
    this.onDelete.emit(this.todo.id);
  }

}
