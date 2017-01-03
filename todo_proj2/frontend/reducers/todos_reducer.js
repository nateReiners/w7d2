import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const newTodos = [
  {
    id: 1,
    title: "xxxx",
    body: "xxxxx",
    done: false
  },
  {
    id: 2,
    title: "0000",
    body: "00000",
    done: true
  }
];

window.newTodos = newTodos;

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let oldState = merge({}, state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      newState = merge(oldState, newState);
      return newState;
    case REMOVE_TODO:
      newState = oldState;
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
