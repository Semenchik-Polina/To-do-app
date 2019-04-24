import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TaskTable from '../../components/TaskTable';

import { Field, Form, reduxForm } from 'redux-form';
import CheckboxGroup from '../../components/CheckboxGroup';

import { getCurrentTasks, getCompletedTasks, completeTask } from "../../actions/actions";

class CurrentTasks extends Component {
    componentDidMount = () => {
        try {
            this.props.getCurrentTasks();
        } catch (error) {
            console.log("CurrentTasks componentDidMount error:", error)
        }
    }    

    // componentWillReceiveProps()

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.currentTasks !== this.props.currentTasks) {
    //         this.props.handleSubmit(this.handleSubmit);
    //     }
    // }

    handleSubmit = (values) => {
        if (values.checkedValues && values.checkedValues.length > 0) {
            // console.log("handle submit values", values);
            try {
                values.checkedValues.forEach(id => {
                    this.props.completeTask(id);
                    this.props.getCurrentTasks();
                    this.props.getCompletedTasks();
                })
            } catch (error) {
                console.log("CurrentTasks handleSubmit error:", error)
            }
            // this.props.getCurrentTasks();
            // this.props.history.push('/');
        }
    };

    render() {
        const curTasks = this.props.currentTasks;
        const tasksList = curTasks.length ? (
            <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                {/* <TaskTable tasks={tasks} handleOptionChange={this.handleOptionChange}
                    selectedTask={this.state.selectedTask} /> */}
                <Field
                    name="checkedValues"
                    component={CheckboxGroup}
                    options={curTasks.map(task => ({ 
                        name: task.summary, 
                        value: task.id, 
                        date: task.date, 
                        files: task.files 
                        }))}
                />
                <button type="submit">Complete</button>
            </Form>
        ) : (
                <p className="center">You have no tasks left</p>
            );
        return (
            <div className="tasks collection">
                {tasksList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentTasks: state.taskList.currentTasks,
        completedTasks: state.taskList.completedTasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: (completedId) => dispatch(completeTask(completedId)),
        getCurrentTasks: () => dispatch(getCurrentTasks()),
        getCompletedTasks: () => dispatch(getCompletedTasks())
    }
}

export default reduxForm({
    form: 'completeForm' 
})(connect(mapStateToProps, mapDispatchToProps)(CurrentTasks))