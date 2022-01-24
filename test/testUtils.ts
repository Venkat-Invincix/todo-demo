import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import taskReducer from "../src/reducers/tasksReducer";

export const storeFactory = (initialState: any) => {
    return createStore(combineReducers({
        tasks: taskReducer
    }))
}

/** 
     * return shallow wrapper containing node(s) within the given data set value.
     * @param { shallowWrapper } wrapper - enzyme shallow wrapper to search within.
     * @param { string } val - value of data test attribute for search
     * @return { shallowWrapper }
     */

export const findByTestAttr = (wrapper: any, val: string) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const testStore = () => {
    const store = createStore(combineReducers({
        tasks: taskReducer
    }), applyMiddleware(thunk))
    return store;
}
