import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = (state = { currentTasks: [], completedTasks: [] }, action) => {

    switch (action.type) {
        case "GET_CUR_TASKS": {
            const { currentTasks } = action.data;
            return {
                ...state,
                currentTasks: currentTasks
            };
        }
        case "GET_COMPL_TASKS": {
            const { completedTasks } = action.data;
            return {
                ...state,
                completedTasks: completedTasks
            };
        }
        case "COMPLETE_TASK": {
            return { ...state };
        }
        case "ADD_TASK": {
            const { data } = action.data.addedTask;
            let newCurrentTasks = state.currentTasks;
            newCurrentTasks.push(data);
            return {
                ...state,
                currentTasks: newCurrentTasks
            }
        }
        default: {
            return { ...state };
        }
    }
}

export default combineReducers({
    form: formReducer,
    taskList: rootReducer
});
