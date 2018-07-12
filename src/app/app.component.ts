import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent implements OnInit {
  title = 'Angular/Docker Demo';
  todoList: Todo[] = [];
  newTodo: Todo = new Todo

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  addTodo = function () {
    this.todoDataService.addTodo(this.newTodo).subscribe(
      x => {
        this.getTodos();
      }, error => {
        alert("Error in Save");
        console.log(error);
      }
    );
  }

  toggleTodoCompletedStatus(todo) {
    this.todoDataService.toggleTodoCompletedStatus(todo).subscribe(
      x => {
        this.getTodos();
      }, error => {
        alert("Error in delete");
      }
    );;
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodo(todo).subscribe(
      x => {
        this.getTodos();
      }, error => {
        alert("Error in delete");
      }
    );;
  }

  getTodos = function () {
    this.todoDataService.getAllTodos()
      .subscribe(
          data => {
            this.todoList = data;
    });
  }
}

