import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from '../reducers/tasksReducer';
import userReducer from '../reducers/userReducers';

const configureStore = () => {
    const store = createStore(combineReducers({
        tasks: taskReducer,
        user: userReducer
    }), applyMiddleware(thunk))
    return store;
}

export default configureStore;