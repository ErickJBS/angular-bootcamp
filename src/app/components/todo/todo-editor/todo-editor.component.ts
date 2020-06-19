import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {

  content: string = "";
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  addTodo() {
    this.data.addTodo({
      date: new Date(),
      content: this.content
    })
    this.content = "";
  }

}
