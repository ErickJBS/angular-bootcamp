import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { TodoComponent } from '@components/todo/todo.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'todo',
  pathMatch: 'full'
}, {
  path: '',
  component: MainComponent,
  children: [{
    path: 'todo',
    component: TodoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
