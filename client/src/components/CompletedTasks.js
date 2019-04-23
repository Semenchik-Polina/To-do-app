import React, { Component } from 'react';
import TaskTable from './TaskTable';
import { connect } from 'react-redux';
import { getCompletedTasks } from "../actions/actions";

class CompletedTasks extends Component {
    componentDidMount = async () => {
        try {
            this.props.getCompletedTasks();
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { completedTasks } = this.props;
        const tasksList = completedTasks.length ? (
            < TaskTable tasks={completedTasks} handleOptionChange={null}
                selectedTask={null} />
        ) : (
                <p className="center">You have no completed tasks</p>
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
        completedTasks: state.taskList.completedTasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCompletedTasks: () => dispatch(getCompletedTasks())
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(CompletedTasks))


// export default CompletedTasks