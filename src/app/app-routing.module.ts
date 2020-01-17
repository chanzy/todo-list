import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list/todo-list.component';
import {DoneListComponent} from './components/todo-list/done-list/done-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  {path: 'todo', component: TodoListComponent},
  {path: 'done', component: DoneListComponent},
  { path: '**', redirectTo: '/done' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
