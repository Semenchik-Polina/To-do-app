import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, Form, reduxForm } from 'redux-form';
import FieldFileInput from '../FieldFileInput';
import { getCurrentTasks, addTask } from '../../actions/actions';

class AddTaskForm extends Component {
    handleSubmit = (values) => {
        const { summary, date, files } = values;
        this.props.addTask(summary, date, files);
    };

    render() {
        const { error, handleSubmit } = this.props;

        return (
            <div>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <h3>Add a new task</h3>
                    <div>
                        <label htmlFor="task">Task</label>
                        <Field name="summary" component="input" type="text" placeholder="Summarize the task" required />
                    </div>
                    <div>
                        <label htmlFor="date">Expected date of task solving</label>
                        <Field name="date" component="input" type="date" required />
                    </div>
                    <div className="input-field">
                        <Field name="files" component={FieldFileInput} />
                    </div>
                    {error && <strong>{error}</strong>}
                    <button type="submit">Add task</button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentTasks: state.taskList.currentTasks,
        // addTaskForm: state.form.addForm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (summary, date, files) => dispatch(addTask(summary, date, files)),
        getCurrentTasks: () => dispatch(getCurrentTasks()),
    };
};

export default reduxForm({
    form: 'addTaskForm',
})(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(AddTaskForm),
);
