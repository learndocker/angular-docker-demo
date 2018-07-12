import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values for the todo via the constructor', () => {
    let todo = new Todo({
      title: 'Learn Docker',
      completed: false
    });
    expect(todo.title).toEqual('Learn Docker');
    expect(todo.completed).toEqual(false);
  })
});
