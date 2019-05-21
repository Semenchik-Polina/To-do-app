import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/actions';

class LogoutButton extends Component {
    
    handleClick = () => {
        this.props.logout().then((res) => {
            this.props.history.replace('/login');
        });
    };

    render() {
        const { handleClick } = this.props;
        return (<button onClick={handleClick(this.handleClick)}>LOG OUT</button>);
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LogoutButton);
