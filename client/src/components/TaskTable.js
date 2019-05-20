import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = (props) => {
    const { tasks, handleOptionChange, selectedTask } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>task</th>
                    <th>expected date</th>
                    <th>files</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <TaskRow
                        task={task}
                        handleOptionChange={handleOptionChange}
                        selectedTask={selectedTask}
                        key={task.id}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
