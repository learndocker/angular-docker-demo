import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    this.todos.push(todo);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  updateTodo(todo: Todo, values: Object = {}): Todo {
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoCompletedStatus(todo: Todo): Todo {
    return this.updateTodo(todo, { completed: !todo.completed })
  }
}
