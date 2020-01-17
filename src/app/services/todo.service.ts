import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private doneList: Array<string>;
  private todoList: Array<string>;
  private observableTodos: BehaviorSubject<Array<string>>;
  private observableDone: BehaviorSubject<Array<string>>;


  constructor() {
    this.doneList = [];
    this.todoList = [];
    this.observableTodos = new BehaviorSubject(this.todoList);
    this.observableDone = new BehaviorSubject(this.doneList);
  }

  get todos() {
    return this.observableTodos.asObservable();
  }

  get done() {
    return this.observableDone.asObservable();
  }

  addTodo(todo: string) {
    this.todoList.push(todo);
    this.observableTodos.next(Object.assign([], this.todoList));
  }

  public doneTodo(index: number) {
    this.doneList.push(this.todoList[index]);
    this.observableDone.next(Object.assign([], this.doneList));
    this.removeTodo(index);
  }

  public removeTodo(index: number) {
    this.todoList.splice(index, 1);
    this.observableTodos.next(this.todoList);
  }

  public removeDone(index: number) {
    this.doneList.splice(index, 1);
    this.observableDone.next(this.doneList);
  }
}
