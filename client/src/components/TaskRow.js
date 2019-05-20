import React from 'react';

const TaskRow = (props) => {
    const { task, handleOptionChange, selectedTask } = props;

    const Input = () => {
        let checked = selectedTask === task.id;
        const input = !!handleOptionChange ? (
            <input type="checkbox" onChange={handleOptionChange} value={task.id} checked={checked} />
        ) : null;

        return input;
    };

    return (
        <tr key={task.id}>
            <td>
                {' '}
                {Input()}
                {task.summary}
            </td>
            <td>{task.date}</td>
            <td>
                {task.files !== null ? (
                    <a download href={'/files/' + task.files.filename}>
                        {task.files.filename}
                    </a>
                ) : (
                    <span />
                )}
            </td>
        </tr>
    );
};

export default TaskRow;
