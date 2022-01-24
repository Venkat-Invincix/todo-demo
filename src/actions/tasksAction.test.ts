import * as taskAction from "./tasksAction";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';



describe('testing correct guess action creator', () => {

    it('return an action of CorrectGuess', () => {
        /**
         * for object checking we use @function - .toEqual({})
         */
        const correctGuessAction = taskAction.correctGuess();
        expect(correctGuessAction).toEqual({
            type: 'CorrectGuess'
        })
    })

})

describe('testing tasks Action', () => {

    const mockStore = configureStore();
    const store = mockStore();

    beforeEach(() => {
        store.clearActions();
    })

    it('Testing `GET_ALL_TASKS` action creators', () => {
        const expectedAction = [
            {
                type: 'GET_ALL_TASKS',
                payload: { tasks: 'morning dance' }
            }
        ]
        store.dispatch(taskAction.getAllTasks({ tasks: 'morning dance' }));
        expect(store.getActions()).toEqual(expectedAction);
    })

    it('Testing `ADD_TASK` action creators', () => {
        const expectedAction = [
            {
                type: 'ADD_TASK',
                payload: { tasks: 'morning walk' }
            }
        ]
        store.dispatch(taskAction.addTask({ tasks: 'morning walk' }));
        expect(store.getActions()).toEqual(expectedAction);
    })

    it('Testing `DELETE_TASK` action creators', () => {
        const expectedAction = [
            {
                type: 'DELETE_TASK',
                payload: 2884774
            }
        ]
        store.dispatch(taskAction.deleteTask(2884774));
        expect(store.getActions()).toEqual(expectedAction);
    })

    it('Testing `UPDATE_TASK` action creators', () => {
        const expectedAction = [
            {
                type: 'UPDATE_TASK',
                payload: 2884774
            }
        ]
        store.dispatch(taskAction.updateTask(2884774));
        expect(store.getActions()).toEqual(expectedAction);
    })
})

describe('testing async task action', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const mock = new MockAdapter(axios);
    const store = mockStore({});
    describe('Testing `asyncGetAllTasks` action creators', () => {
        beforeEach(() => {
            store.clearActions();
        })
        it('should get all Tasks', () => {
            // mock.onGet('https://api-nodejs-todolist.herokuapp.com/task')
            //     .reply(200, {
            //         data: [
            //             {
            //                 id: 5455176161,
            //                 task: "playing cricket"
            //             }
            //         ]
            //     })

            // store.dispatch(taskAction.asyncGetAllTasks() as any)
            //     .then(() => {
            //         console.log('hjhj', store.getState())
            //     })
        })
    });
})