import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    const items = todos.map((todo, id) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        removeTodo={this.props.removeTodo}
        receiveTodo={this.props.receiveTodo}
      />
    ));

    return (
      <div>
        <ul>
          {items}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}


export default TodoList;
