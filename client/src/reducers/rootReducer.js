import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import taskReducer from './taskReducer';
import userReducer from './userReducer';

export default combineReducers({
    form: formReducer,
    taskList: taskReducer,
    user: userReducer,
}) ;
