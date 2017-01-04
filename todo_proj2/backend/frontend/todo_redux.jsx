import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import allTodos from './reducers/selectors';
import {fetchTodos} from './actions/todo_actions';


const store = configureStore; //TODO remember to remove when done
window.store = store;

// window.selectors = allTodos(store.getState());

document.addEventListener('DOMContentLoaded', () => {
  window.fetchTodos = fetchTodos;
  const rootElement = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, rootElement);
});
