import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import allTodos from './reducers/selectors';


const store = configureStore; //TODO remember to remove when done
window.store = store;

// window.selectors = allTodos(store.getState());

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootElement);
});
