import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId: number = 0;
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { 
      title: 'Install Angular CLI', 
      id: this.todoId, 
      status:'Todo',
      createdAt:new Date(),
      description: ""
     },
     { 
      title: 'Draw for 2 hours', 
      id: this.todoId++, 
      status:'Todo',
      createdAt:new Date(),
      description: ""
     },
     { 
      title: 'Finish Checkpoint', 
      id: this.todoId++, 
      status:'Todo',
      createdAt:new Date(),
      description: ""
     }
  ]
  statuses: ["Todo", "Doing", "Done"] ;

  constructor() { 

  }
  getTodos(status: string){
    if(status){
    return this.todoList.filter(todo => todo.status === status);
    }
     return this.todoList
    
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo):void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
  getStatuses() {
    return this.statuses;
  }
}
