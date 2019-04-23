import React, { Component } from 'react';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileName = this.fileInput.current.files[0].name;
        this.fileInput = React.createRef();
    }
    // handleSubmit(event) {
    //   event.preventDefault();
    //   alert(
    //     `Selected file - ${
    //       this.fileInput.current.files[0].name
    //     }`
    //   );
    // }

    render() {
        return (
            <div>
                <label>
                    Upload file:
                <input type="file" ref={this.fileInput} />
                </label>
                <br />
            </div>
        );
    };
}

export default FileInput;