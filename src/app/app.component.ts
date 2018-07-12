import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  title = 'Angular/Docker Demo';
  constructor(private todoDataService: TodoDataService) {
  }

  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoCompletedStatus(todo) {
    this.todoDataService.toggleTodoCompletedStatus(todo);
  }

  removeTodo(todo) {
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}

