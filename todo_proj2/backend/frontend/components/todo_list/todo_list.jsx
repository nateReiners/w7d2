import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todos = this.props.todos;
    const items = todos.map((todo, id) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        deleteTodo={this.props.deleteTodo}
        updateTodo={this.props.updateTodo}
      />
    ));

    return (
      <div>
        <ul>
          {items}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}


export default TodoList;
