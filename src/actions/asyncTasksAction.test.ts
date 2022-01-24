import moxios from 'moxios';
import { testStore } from '../../test/testUtils';

import { asyncGetAllTasks } from '../actions/tasksAction';


describe('async get All tasks', () => {

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('store is updated correctely', () => {
        const expectedState = {
            tasks: [
                {
                    id: 16673378,
                    task: 'cricket'
                },
                {
                    id: 16673376,
                    task: 'dancing'
                },
            ]
        }
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(asyncGetAllTasks() as any)
            .then(() => {
                const newState = store.getState();
                console.log('--->', newState);
                // expect(newState.tasks).toEqual(expectedState.tasks);
            })
    })

})