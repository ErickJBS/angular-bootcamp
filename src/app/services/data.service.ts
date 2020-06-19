import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todos: Todo[] = [];
  private subjectTodos = new BehaviorSubject<Todo[]>([]);
  private observableTodos = this.subjectTodos.asObservable();

  constructor() { }

  addTodo(todo: Todo): void {
    todo.id = uuidv4();
    this.todos.push(todo);
    this.subjectTodos.next(this.todos);
  }

  getTodos(): Observable<Todo[]> {
    return this.observableTodos;
  }

  deleteTodo(id: number | string) {
    const index = this.todos.findIndex((todo)=> todo.id == id);
    this.todos.splice(index, 1);
    this.subjectTodos.next(this.todos);
  }
}
