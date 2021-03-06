import React, { Component } from 'react';
import AddTaskForm from './components/forms/AddTaskForm';
import CurrentTasks from './components/forms/CurrentTasksForm';
import CompletedTasks from './components/CompletedTasks';
// import LogoutButton from './components/LogoutButton';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>ToDo List (React)</h2>
                <AddTaskForm />
                <h3>Current tasks</h3>
                <CurrentTasks />
                <h3>Completed tasks</h3>
                <CompletedTasks />
                {/* <LogoutButton /> */}
            </div>
        );
    }
}

export default App;
