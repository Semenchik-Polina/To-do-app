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
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }

    // console.log("rootReducer result", state);
    // return state;

    // try {
    //     const { data } = await axios.get('/tasks');
    //     state =  data.tasks ;
    // } catch (error) {
    //     console.log(error)
    // }
    // console.log("rootReducer state:", state);
    // return state;
}

// async function callApi(state = []) {
//     const result = await axios.get('/tasks')
//         .then(function (response) {
//             state = response.data.tasks;
//         })
//         .catch(function (error) {
//             console.log("error", error);
//         })
//         .then(function () {
//             // console.log("get state", state);
//             return state;
//         });
//     console.log("return state", result);
//     return result;
// };

export default combineReducers({
    form: formReducer,
    taskList: rootReducer
});
