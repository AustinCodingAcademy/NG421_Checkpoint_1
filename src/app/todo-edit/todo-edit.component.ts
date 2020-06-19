import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  modalInstance;
  todo: ITodo;
  newDescription: string;
  constructor() { }

  ngOnInit() {
  }
  edit() {
    this.modalInstance.close(this.newDescription);
  }
}
