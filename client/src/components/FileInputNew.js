import React, { Component } from 'react'

export default class FieldFileInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { input: { onChange } } = this.props;
        onChange(e.target.files[0])
    }

    render() {
        const { input: { value } } = this.props;
         return (
            <input
                name="files"
                type="file"
                onChange={this.onChange}
            />
        )
    }
}
