import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigations';
import { todos } from './todos.json';
import TaskForm from './components/TaskFrom';

//Imprimir el JSON que se encuentra forma estatica
console.log(todos);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      mainTitle: 'Administración de Tareas',
      vista: 'Lista de Tareas',
      numTareas: todos.length,
      todos: todos
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(toDo) {
    this.setState({
      // Unir el estado actuales de la tareas, en pocas palabras agregar una nueva tarea al arreglo
      todos: [...this.state.todos, toDo],
    });
  }

  handleRemoveTask(id) {
    if (window.confirm('Esta seguro de eliminar esta tarea')) {
      this.setState({
        //filter generar un nuevo arreglo con los elementos que complar con las condicion dentro de las {}
        todos: this.state.todos.filter((elemet, index) => {
          return index !== id
        })
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
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
            <div className="card-footer">
              <button type="button" className="btn btn-danger"
                //Otra forma de añadir el estado a los botones 
                //Le paso la varible i por el clave que nos provee map
                onClick={this.handleRemoveTask.bind(this, i)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        {/* Importar el header de la Aplicación */}
        <Navigation titulo={this.state.mainTitle} numTask={this.state.todos.length}/>

        <h1 className="titulo">{this.state.vista}</h1>
        <div className="container">
          {/* Importar el formulario de las tareas */}
          <TaskForm onAddTask={this.handleAddTask} />
          <div className="row mt-4">
            {/* Importar la constante con los con las cards */}
            {todos}
          </div>
        </div>

        {/* Logo de react */}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
