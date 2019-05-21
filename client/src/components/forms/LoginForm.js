import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import { login } from '../../actions/actions';

class LoginForm extends Component {
    handleSubmit = (values) => {
        this.props.login(values).then((res) => {
            this.props.history.replace('/');
        });
    };

    render() {
        console.log("loginform this", this);
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <div>
                        <Field
                            name="username"
                            component="input"
                            type="text"
                            placeholder="Username goes here..."
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            placeholder="Password goes here..."
                            required
                        />
                    </div>
                    <button type="submit">LOG IN</button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default reduxForm({
    form: 'loginForm',
})(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(LoginForm),
);
