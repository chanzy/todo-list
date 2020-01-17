import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  private doneList;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.doneList = this.todoService.done;
  }

  delete(i: number) {
    this.todoService.removeDone(i);
  }
}
