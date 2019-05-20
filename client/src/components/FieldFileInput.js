import React, { Component } from 'react';

export default class FieldFileInput extends Component {
    onChange = (e) => {
        const {
            input: { onChange },
        } = this.props;
        onChange(e.target.files[0]);
    };

    render() {
        return <input name="files" type="file" onChange={this.onChange} />;
    }
}
