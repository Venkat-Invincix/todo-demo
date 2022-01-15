import { AnyAction } from "redux";

const initialState: object = {};

const userReducer = (state: object = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state, ...action.payload
            }

        default:
            return { ...state }
    }
}

export default userReducer;