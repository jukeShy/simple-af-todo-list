import './addtodo.css';

import React, { Component } from 'react';
import uuid from 'uuid';
import M from 'materialize-css';


class AddTodo extends Component {

  state = {
    todoTitle: ''
  }

  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitHandle = (e) => {
    e.preventDefault();

    if (!this.state.todoTitle) {
      M.toast({html: 'Title should be populate'});
      return;
    }

    this.props.addTodo({
      _id: uuid.v4(),
      title: this.state.todoTitle,
      completed: false
    });

    this.setState({ todoTitle: '' });

  }

  render() {
    return (
      <form className="container" onSubmit={this.onSubmitHandle}>
        <div className="form-group ">
          <input 
            placeholder="Todo Title" 
            type="text" 
            name="todoTitle"
            onChange={this.onChangeHandle}
            value={this.state.todoTitle}
            />
          <button className="btn" type="submit">Add Todo</button>
        </div>
      </form>  
    )
  }
}

export default AddTodo;