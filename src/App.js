import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigations';
import { todos } from './todos.json';
console.log(todos);

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      title: 'Aplicación de Tareas',
      vista: 'Vista de tareas',
      numTareas: 10,
      todos: todos
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className="col-md-4">
        <div className="card mt-5">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p className="badge badge-pill badge-primary ml-2">{todo.responsible}</p>
          </div>
        </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation titulo={this.state.title} />
          <h1 className={this.state.vista}>{this.state.vista}</h1>

          <div className="container">
            <div className="row mt-4">
                {todos}
            </div>
          </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
