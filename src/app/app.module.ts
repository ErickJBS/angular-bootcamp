import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TodoEditorComponent } from './components/todo/todo-editor/todo-editor.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    MainComponent,
    HeaderComponent,
    TodoComponent,
    FooterComponent,
    TodoEditorComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
