import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';
import About from './pages/About';

class App extends Component {
  URLBASE = 'https://jsonplaceholder.typicode.com/todos?_limit=10'

  state = {
    todos: []
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter( todo => todo.id !== id )]
    })
  }

  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo;
      })
    });
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    }); 
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <main>
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {
                this.state.todos.length > 0 
                ?
                <TodoList
                  todos={this.state.todos}
                  markCompleted={this.markCompleted}
                  deleteTodo={this.deleteTodo} />

                : 
                <div className="container">
                  <p>There is no todos. Add some.</p>
                </div>  
              }
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

  async componentDidMount() {
    const todos = await fetch(this.URLBASE)
      .then(res => res.json());

    this.setState({ todos });
  }

}

export default App;
