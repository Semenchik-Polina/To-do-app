import React, { Component } from 'react';


class CheckboxGroup extends Component {
    handleChange = (option, input) => (event) => {
        const newValue = [...input.value];

        if (event.target.checked) {
            newValue.push(option.value);
        } else {
            newValue.splice(newValue.indexOf(option.value), 1);
        }

        return input.onChange(newValue);
    };

//     <tr key={task.id}>
//     <td> {Input()}
//         {task.summary}</td>
//     <td>{task.date}</td>
//     <td>
//         {/* <% oneTask.files.forEach((file) => { %>
//                     <a download href="/files/<%= file %>"><%=file %></a> */}
//     </td>
// </tr>

renderCheckbox = input => (option, index) => (
    <tr className="checkbox-group__item" key={index}>
        {/* <label htmlFor={`${input.name}[${index}]`}> */}
        <td>
            <input
                type="checkbox"
                name={`${input.name}[${index}]`}
                id={`${input.name}[${index}]`}
                value={option.value}
                checked={input.value.indexOf(option.value) !== -1}
                onChange={this.handleChange(option, input)}
            />
            <span>{option.name}</span>
        </td>
        <td>{option.date}</td>
        <td>{option.files}</td>
        {/* </label> */}
    </tr>
);

render() {
    // const { options, input, className } = this.props;
    const { options, input } = this.props;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>task</th>
                        <th>expected date</th>
                        <th>files</th>
                    </tr>
                </thead>
                <tbody>
                    {options.map(this.renderCheckbox(input))}
                </tbody>
            </table>
        </div>
    );
}
}

export default CheckboxGroup;