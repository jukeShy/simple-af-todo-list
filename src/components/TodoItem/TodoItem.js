import './todoitem.css';

import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {

  render() {
    const { todo, markCompleted, deleteTodo } = this.props; 

    const styles = {
      borderColor: todo.completed ? '#4CAF50' : '',
      
    }

    return (
      <div className="collection-item todo-item" style={styles}>
        <label className="todo-item-checkbox">
          <input type="checkbox" onChange={markCompleted.bind(this, todo.id)} checked={todo.completed}/>
          <span>Is Completed</span>
        </label>
        <div className="todo-item-body">
          <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</h3>
          <button className="btn red" onClick={deleteTodo.bind(this, todo.id)}>
            <span>Delete</span> 
            <i className="material-icons">delete</i>
          </button>
        </div>
      </div>
    )
  }

  
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}



export default TodoItem;