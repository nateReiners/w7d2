export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

import * as APIUtil from "../util/todo_api_util.js";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (newtodo) => dispatch =>  (
  APIUtil.createTodo(newtodo).then(todo => dispatch(receiveTodo(todo)))
);

export const deleteTodo = (oldtodo) => dispatch => (
  APIUtil.deleteTodo(oldtodo).then(todo => dispatch(removeTodo(todo)))
);

export const updateTodo = (todo) => dispatch => {
  console.log(todo);
  return APIUtil.updateTodo(todo).then(updatedtodo => {
    console.log(updatedtodo);
    return dispatch(receiveTodo(updatedtodo));
  }
);
};

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
