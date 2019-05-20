import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ACTIONS_TYPES } from '../constants/constants';

const rootReducer = (state = { currentTasks: [], completedTasks: [] }, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.GET_CUR_TASKS: {
            const { currentTasks } = action.data;
            return {
                ...state,
                currentTasks,
            };
        }
        case ACTIONS_TYPES.GET_COMPL_TASKS: {
            const { completedTasks } = action.data;
            return {
                ...state,
                completedTasks,
            };
        }
        case ACTIONS_TYPES.COMPLETE_TASK: {
            const { data } = action.data.completedTask;
            const newCurrentTasks = [...state.currentTasks].filter((task) => task.id !== data.id);
            const newCompletedTasks = [...state.completedTasks, data];
            console.log('completedTask ', data);
            return {
                ...state,
                currentTasks: newCurrentTasks,
                completedTasks: newCompletedTasks,
            };
        }
        case ACTIONS_TYPES.ADD_TASK: {
            const { data } = action.data.addedTask;
            return {
                ...state,
                currentTasks: [...state.currentTasks, data],
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default combineReducers({
    form: formReducer,
    taskList: rootReducer,
});
