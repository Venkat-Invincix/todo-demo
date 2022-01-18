import { createStore, combineReducers } from "redux";
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

