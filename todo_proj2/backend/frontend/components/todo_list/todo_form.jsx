import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {title: "", body: ""};
    this.submitTodo = this.submitTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);

  }

  submitTodo(e) {
    e.preventDefault();
    console.log("submitted");

    const newTodo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    };

    this.props.receiveTodo(newTodo);
    this.setState({title: "", body: ""});
  }

  updateTitle(e) {
    console.log(e.target.value);
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    console.log(e.target.value);
    this.setState({body: e.target.value});
  }

  render() {

    return (
      <form className="todo-form" onSubmit={this.submitTodo}>
        Submission Form
        <br/>

        <label>
          Title:
          <br/>
          <input type="text"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.updateTitle}></input>
        </label>

        <br/>

        <label>
          Body:
          <br/>
          <input type="text"
            value={this.state.body}
            onChange={this.updateBody}></input>
        </label>
        <br/>

        <button>
          Create Todo!
        </button>
      </form>
    );
  }
}

export default TodoForm;
