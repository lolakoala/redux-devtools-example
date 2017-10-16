import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodoForm from '../components/AddTodoForm';

const mapStateToProps =  (store) => ({ todos: store.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => {
    dispatch(addTodo(text,id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
