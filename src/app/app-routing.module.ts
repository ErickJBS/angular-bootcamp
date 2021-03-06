import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { TodoComponent } from '@components/todo/todo.component';
import { SignInComponent } from '@components/sign-in/sign-in.component';
import { SignUpComponent } from '@components/sign-up/sign-up.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CleanComponent } from './layout/clean/clean.component';
import { LeavePageGuard } from './guards/leave-page.guard';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: '', component: MainComponent, children: [
    { path: 'todo', component: TodoComponent, canActivate: [ AuthGuard ] }
  ]},
  { path: '', component: CleanComponent, children: [
    { path: 'signIn', component: SignInComponent },
    { path: 'signUp', component: SignUpComponent, canDeactivate: [ LeavePageGuard ] }
  ]},
  { path: '**', redirectTo: 'todo', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
