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
    this.props.deleteTodo(this.props.todo);
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
    console.log("button pressed" + this.props.todo.done);
    let newDoneStatus = !this.props.todo.done;
    const updatedTodo = merge({}, this.props.todo, {done: newDoneStatus});
    // this.setState({done: newDoneStatus});
    console.log("button pressed2" + updatedTodo.done);
    //
    console.log(this.props.updateTodo);
    this.props.updateTodo(updatedTodo);
    console.log("button pressed3" + this.props.todo.done);

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
