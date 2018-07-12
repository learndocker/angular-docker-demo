import { TestBed, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', completed: false});
      let todo2 = new Todo({title: 'Hello 2', completed: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#toggleTodoCompletedStatus', () => {
    it('should toggle the status of the todo', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', completed: false});
      let todo2 = new Todo({title: 'Hello 2', completed: true});
      expect(service.toggleTodoCompletedStatus(todo1).completed).toBeFalsy;
      expect(service.toggleTodoCompletedStatus(todo2).completed).toBeTruthy;
    }));
  });

  describe('#updateTodo', () => {
    it('should toggle the status of the todo', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({title: 'Hello 1', completed: false});
      service.updateTodo(todo, {title: 'New title'})
      expect(todo.title).toEqual('New title');
    }));
  });
});
