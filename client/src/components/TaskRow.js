import React from 'react';

const TaskRow = (props) => {
    const { task, handleOptionChange, selectedTask } = props;

    const Input = () => {
        //       let checked = (selectedTask === null) ? true : selectedTask == task.id;
        let checked = selectedTask === task.id;
        const input = (!!handleOptionChange) ?
            <input type="checkbox" onChange={handleOptionChange}
                value={task.id} checked={checked}
            />
            : null;
        //    <input type="checkbox" value={task.id} defaultChecked/>
        return input;
    }

    return (
        <tr key={task.id}>
            <td> {Input()}
                {task.summary}</td>
            <td>{task.date}</td>
            <td>
            <a download href= {"/files/" + task.files.filename}>
                { task.files.filename}
            </a>
            </td>
        </tr>
    )
}

export default TaskRow