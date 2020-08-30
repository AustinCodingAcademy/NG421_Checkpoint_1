import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  constructor(private todoService: TodoService, private modalService: NgbModal) { }
  todoTitle = '';
  isEditing = false;
  statuses: string[] = this.todoService.getStatuses();
  ngOnInit() {
  }
  async deleteTodo(todo) {
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.deleteTodo(todo);
      }
    } catch (ex) {

    }
  }

  async editTodo(todo) {
    let result;
    const modal = this.modalService.open(TodoEditComponent);
    modal.componentInstance.modalInstance = modal;
    modal.componentInstance.todo = todo;
    try {
      result = await modal.result;
      this.todoService.editTodo(todo);
    } catch (ex) {

    }
  }


}
