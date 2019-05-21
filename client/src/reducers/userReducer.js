import { ACTIONS_TYPES } from '../constants/constants';

const initialState = {
    isAuth: !!localStorage.getItem('auth'),
    isRegisterSuccessed: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.LOGIN: {
            localStorage.setItem('auth', true);
            return {
                ...state,
                isAuth: true,
            };
        }
        case ACTIONS_TYPES.LOGOUT: {
            localStorage.removeItem('auth');
            return {
                ...state,
                isAuth: false,
            };
        }
        case ACTIONS_TYPES.RESPONSE_401: {
            localStorage.removeItem('auth');
            return {
              ...state,
              isAuth: false
            }
        }
        default: {
            return { ...state };
        }
    }
};

export default userReducer;