import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todos;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  done(i: number) {
    this.todoService.doneTodo(i);
  }

  delete(i: number) {
    this.todoService.removeTodo(i);
  }
}
