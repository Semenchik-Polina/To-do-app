import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, Form, reduxForm } from 'redux-form';
import CheckboxGroup from '../../components/CheckboxGroup';

import { getCurrentTasks, completeTask } from '../../actions/actions';

class CurrentTasks extends Component {
    componentDidMount = () => {
        this.props.getCurrentTasks();
    };

    handleSubmit = (values) => {
        const { completeTask } = this.props;
        const { checkedValues } = values;
        if (checkedValues && checkedValues.length > 0) {
            completeTask(checkedValues[checkedValues.length - 1]);
        }
    };

    render() {
        const { currentTasks, handleSubmit } = this.props;
        const tasksList =
            typeof currentTasks !== 'undefined' && currentTasks.length ? (
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field
                        name="checkedValues"
                        component={CheckboxGroup}
                        options={currentTasks.map((task) => ({
                            name: task.summary,
                            value: task.id,
                            date: task.date,
                            files: task.files,
                        }))}
                    />
                    <button type="submit">Complete</button>
                </Form>
            ) : (
                <p className="center">You have no tasks left</p>
            );

        return <div className="tasks collection">{tasksList}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        currentTasks: state.taskList.currentTasks,
        completedTasks: state.taskList.completedTasks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: (completedId) => dispatch(completeTask(completedId)),
        getCurrentTasks: () => dispatch(getCurrentTasks()),
    };
};

export default reduxForm({
    form: 'completeForm',
})(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CurrentTasks),
);
