import { ACTIONS_TYPES } from '../constants/constants';
import controllers from '../controllers/controllers';

const filterTaskList = (tasks, state) => {
    return tasks.filter(function(task) {
        return task.state === state;
    });
};

const getTasks = async (type) => {
    const { data } = await controllers.getTasks();
    const tasks = filterTaskList(data.tasks, type);

    return tasks;
};

export function getCurrentTasks() {
    return async (dispatch) => {
        try {
            const tasks = await getTasks('current');
            dispatch({
                type: ACTIONS_TYPES.GET_CUR_TASKS,
                data: { currentTasks: tasks },
            });
        } catch (error) {
            console.log('error in getCurrentTasks action', error);
        }
    };
}

export function getCompletedTasks() {
    return async (dispatch) => {
        try {
            const tasks = await getTasks('completed');
            dispatch({
                type: ACTIONS_TYPES.GET_COMPL_TASKS,
                data: { completedTasks: tasks },
            });
        } catch (error) {
            console.log('error in getTask action', error);
        }
    };
}

export function completeTask(id) {
    return async (dispatch) => {
        try {
            const res = await controllers.completeTask(id);
            console.log('complete task res: ', res);
            dispatch({
                type: ACTIONS_TYPES.COMPLETE_TASK,
                data: { completedTask: res },
            });
        } catch (error) {
            console.log('error in completeTask action', error);
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

            const res = await controllers.addTask(form);
            console.log('complete task request', res.data);

            dispatch({
                type: ACTIONS_TYPES.ADD_TASK,
                data: { addedTask: res },
            });
        } catch (error) {
            console.log('error in addTask action', error);
        }
    };
}
