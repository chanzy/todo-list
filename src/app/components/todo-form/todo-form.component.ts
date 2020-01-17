import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  private todoForm: FormGroup;
  @ViewChild('form', {static: false}) f;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      todoItem: new FormControl('', [Validators.required])
    });
  }

  private addTodo() {
    this.todoService.addTodo(this.todoForm.value.todoItem);
    this.todoForm.reset();
    this.todoForm.controls.todoItem.setErrors(null);
  }
}
