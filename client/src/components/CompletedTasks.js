import React, { Component } from 'react';
import TaskTable from './TaskTable';
import { connect } from 'react-redux';
import { getCompletedTasks } from '../actions/actions';

class CompletedTasks extends Component {
    componentDidMount = () => {
        this.props.getCompletedTasks();
    };

    render() {
        const { completedTasks } = this.props;

        return (
            <div className="tasks collection">
                {completedTasks.length ? (
                    <TaskTable tasks={completedTasks} handleOptionChange={null} selectedTask={null} />
                ) : (
                    <p className="center">You have no completed tasks</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        completedTasks: state.taskList.completedTasks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCompletedTasks: () => dispatch(getCompletedTasks()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CompletedTasks);
