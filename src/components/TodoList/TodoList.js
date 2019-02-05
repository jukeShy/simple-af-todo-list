import './todolist.css';
import PropTypes from 'prop-types';


import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {

  render() {

    const { todos, markCompleted, deleteTodo } = this.props;

    return (
      <div className="todos-list-wrapper">
        <div className="container">
          <h2>Your Todos</h2>
          <ul className="collection todos-list">
            {todos.map( (todo, key) => (
              <TodoItem 
                key={key} 
                todo={todo} 
                markCompleted={markCompleted} 
                deleteTodo={deleteTodo}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;