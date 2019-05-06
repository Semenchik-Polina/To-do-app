import React, { Component } from 'react';
import AddTaskForm from './components/forms/AddTaskForm';
import CurrentTasks from './components/forms/CurrentTasksForm';
import CompletedTasks from './components/CompletedTasks';
import RemoteSubmitButton from './components/remoteSubmitButton/RemoteSubmitButton';

class App extends Component {
  state = {
    tasks: []
  }
  
  render() {
    return (
      <div className="App">
        <h2>ToDo List (React)</h2>
        <AddTaskForm />
        <RemoteSubmitButton />
        <h3>Current tasks</h3>
        <CurrentTasks />
        <h3>Completed tasks</h3>
        <CompletedTasks />
      </div>
    );
  }
}

export default App;
