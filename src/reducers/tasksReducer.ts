import { AnyAction } from 'redux';

const initialState: Array<Object> = [];

const taskReducer = (state: Array<Object> = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'GET_ALL_TASKS': {
            return [
                ...action.payload
            ]
        }

        case 'ADD_TASK': {
            return [
                ...state, { ...action.payload }
            ]
        }

        case 'DELETE_TASK': {
            return state.filter((data: any) => {
                return data._id !== action.payload;
            })
        }

        case 'UPDATE_TASK': {
            return state.map((data: any) => {
                if (data._id === action.payload) {
                    return {
                        ...data, "completed": true
                    }
                }
                else {
                    return { ...data }
                }
            })
        }

        default:
            return [...state];
    }
}

export default taskReducer;