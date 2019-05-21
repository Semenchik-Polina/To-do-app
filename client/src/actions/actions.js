import { ACTIONS_TYPES } from '../constants/constants';
import controllers from '../controllers/controllers';

function handleError(err, dispatch) {
    if (err.status === 401) {
        dispatch({ type: ACTIONS_TYPES.RESPONSE_401 });
    }
}

export function getCurrentTasks() {
    return async (dispatch) => {
        try {
            const res = await controllers.getCurrentTasks();
            const { currentTasks } = res.data;
            dispatch({
                type: ACTIONS_TYPES.GET_CUR_TASKS,
                data: { currentTasks },
            });
        } catch (error) {
            handleError(dispatch, error);
        }
    };
}

export function getCompletedTasks() {
    return async (dispatch) => {
        try {
            const res = await controllers.getCompletedTasks();
            const { completedTasks } = res.data;
            dispatch({
                type: ACTIONS_TYPES.GET_COMPL_TASKS,
                data: { completedTasks },
            });
        } catch (error) {
            handleError(dispatch, error);
        }
    };
}

export function completeTask(id) {
    return async (dispatch) => {
        try {
            const completedTask = await controllers.completeTask(id);
            dispatch({
                type: ACTIONS_TYPES.COMPLETE_TASK,
                data: { completedTask },
            });
        } catch (error) {
            handleError(dispatch, error);
        }
    };
}

export function addTask(summary, date, files) {
    return async (dispatch) => {
        try {
            const form = new FormData();
            form.append('summary', summary);
            form.append('date', date);
            form.append('files', files);

            const addedTask = await controllers.addTask(form);
            dispatch({
                type: ACTIONS_TYPES.ADD_TASK,
                data: { addedTask },
            });
        } catch (error) {
            handleError(dispatch, error);
        }
    };
}

export function login(data) {
    return async (dispatch) => {
        try {
            const user = await controllers.login(data);
            dispatch({
                type: ACTIONS_TYPES.LOGIN,
                data: { user },
            });
        } catch (error) {
            console.log('error in login action', error);
        }
    };
}

export function logout() {
    return async (dispatch) => {
        try {
            const res = await controllers.logout();
            dispatch({
                type: ACTIONS_TYPES.LOGOUT,
                data: { res },
            });
        } catch (error) {
            console.log('error in logout action', error);
        }
    };
}
