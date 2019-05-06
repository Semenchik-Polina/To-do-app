import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, Form, reduxForm } from 'redux-form';
import FieldFileInput from '../../components/FileInputNew';
import { getCurrentTasks, addTask } from "../../actions/actions";


class AddTaskForm extends Component {

    handleSubmit = (values) => {
        console.log("add task handleSubmit values", values);
        const { files } = this.props.addForm.values
        const { summary, date } = values;
        try {
            this.props.addTask(summary, date, files);
        } catch (error) {
            console.log("addTask handleSubmit error:", error)
        }
    }

    render() {
        const { error } = this.props;
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit(this.handleSubmit)} >
                    <h3>Add a new task</h3>
                    <div>
                        <label htmlFor="task">Task</label>
                        <Field name="summary" component="input" type="text"
                            placeholder="Summarize the task" />
                    </div>
                    <div>
                        <label htmlFor="date">Expected date of task solving</label>
                        <Field name="date" component="input" type="date" required />
                    </div>
                    <div className="input-field">
                        <Field name="files" component={FieldFileInput} />

                    </div>
                    {error && <strong>{error}</strong>}
                </Form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        currentTasks: state.taskList.currentTasks,
        addForm: state.form.addForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (summary, date, files) => dispatch(addTask(summary, date, files)),
        getCurrentTasks: () => dispatch(getCurrentTasks()),
    }
}

export default reduxForm({
    form: 'addForm'
})(connect(mapStateToProps, mapDispatchToProps)(AddTaskForm))
