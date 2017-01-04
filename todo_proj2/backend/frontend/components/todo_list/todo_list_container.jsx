import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo, fetchTodos, createTodo, deleteTodo, updateTodo} from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(receiveTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
