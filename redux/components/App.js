import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import * as actions from '../redux/action-creators';

class App extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
        <TodoList list={this.props.todos} onTodoClick={this.props.toggleTodo} filter={this.props.filter} />
        <Filter filter={this.props.filter} setFilter={this.props.setFilter} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(actions.addTodo(text));
    },
    toggleTodo: id => {
      dispatch(actions.toggleTodo(id));
    },
    setFilter: filter => {
      dispatch(actions.setFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);