import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()


export class TodoDataService {
  private todoURL = API_URL + "todos";
  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  getTodoById(Id) {
    return this.http.get<Todo>(this.todoURL + '/' + Id);
  }

  getAllTodos() {
    return this.http.get<Todo[]>(this.todoURL);
  }

  addTodo(todo: Todo) {
    return this.http.post(this.todoURL, todo);
  }

  updateTodo(todo: Todo, data: Object = {}) {
    return this.http.put(this.todoURL + "/" + todo.id, data);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(this.todoURL + "/" + todo.id);
  }

  toggleTodoCompletedStatus(todo: Todo) {
    return this.updateTodo(todo, { completed: !todo.completed });
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for capturing and logging errors
    return Promise.reject(error.message || error);
  }
}
