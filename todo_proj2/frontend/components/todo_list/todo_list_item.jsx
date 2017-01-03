import React from 'react';
import merge from 'lodash/merge';

// const TodoListItem = (props) => (
//   <li>
//     {props.todo.title}
//   </li>
// );

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodoItem = this.removeTodoItem.bind(this);
    this.flipTodoListStatus = this.flipTodoListStatus.bind(this);
  }

  removeTodoItem(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  todoListStatus() {
    if (this.props.todo.done) {
      return "Done";
    } else {
      return "Undo";
    }
  }

  flipTodoListStatus(e) {
    e.preventDefault();
    let newDoneStatus = !this.props.todo.done;
    const updatedTodo = merge({}, this.props.todo, {done: newDoneStatus});
    this.props.receiveTodo(updatedTodo);
  }


  render() {
    return (
      <li>
       {this.props.todo.title}
       <button onClick={this.flipTodoListStatus}> {this.todoListStatus()} </button>
       <button onClick={this.removeTodoItem}> Delete </button>
     </li>
   );
  }
}



export default TodoListItem;
