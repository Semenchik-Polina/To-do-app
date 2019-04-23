import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, Form, reduxForm } from 'redux-form';
import FieldFileInput from '../../components/FileInputNew';

// import submit from '../../components/remoteSubmitButton/AddTaskSubmit';
import { getCurrentTasks, addTask } from "../../actions/actions";

import 'filepond/dist/filepond.min.css';

class AddTaskForm extends Component {
    handleSubmit = (values) => {
        console.log("add task handleSubmit values", values);
        const { files } = this.props.addForm.values
        const { summary, date } = values;
        try {
            this.props.addTask(summary, date, files);
            this.props.getCurrentTasks();
        } catch (error) {
            console.log("addTask handleSubmit error:", error)
        }
    }

    render() {
        const { error } = this.props;
        // console.log("addTask props",this.props);
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit(this.handleSubmit)} encType="multipart/form-data" >
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
                    {/* <button type="submit">Submit</button> */}
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
    form: 'addForm', 
    multipartForm: true,
})(connect(mapStateToProps, mapDispatchToProps)(AddTaskForm))
