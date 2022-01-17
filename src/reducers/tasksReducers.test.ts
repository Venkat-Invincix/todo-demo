import taskReducer from "./tasksReducer";

describe('Task Reducer', () => {

    it('return default initial state of `Empty Array` when no action is passed', () => {
        const newState = taskReducer(undefined, { type: '' });
        expect(newState).toEqual([]);
    })

    it('return state of `Empty Array` upon receving an action of type `GET_ALL_TASKS` with payload `[]` ', () => {
        const action = {
            type: 'GET_ALL_TASKS',
            payload: []
        };
        const newState = taskReducer(undefined, action);
        expect(newState).toEqual([]);
    })

    it('testing `ADD_TASK` action creators ', () => {
        const initialState: Array<Object> = [
            {
                "completed": false,
                "_id": "61e25fe77838470017aa7c05",
                "description": "story writting",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-15T05:47:19.473Z",
                "updatedAt": "2022-01-15T05:47:19.473Z",
                "__v": 0
            },
        ]
        const action = {
            type: 'ADD_TASK',
            payload: {
                "completed": false,
                "_id": "61e260007838470017aa7c06",
                "description": "going to temple",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-15T05:47:44.045Z",
                "updatedAt": "2022-01-15T05:47:44.045Z",
                "__v": 0
            },
        }
        const newState = taskReducer(initialState, action);
        expect(newState.length).not.toBe(1);

    })

    it('testing `DELETE_TASK` action creators', () => {
        const initialState: Array<Object> = [
            {
                "completed": false,
                "_id": "61e25fe77838470017aa7c05",
                "description": "story writting",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-15T05:47:19.473Z",
                "updatedAt": "2022-01-15T05:47:19.473Z",
                "__v": 0
            },
            {
                "completed": false,
                "_id": "61e260007838470017aa7c06",
                "description": "going to temple",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-15T05:47:44.045Z",
                "updatedAt": "2022-01-15T05:47:44.045Z",
                "__v": 0
            },
            {
                "completed": true,
                "_id": "61e1e3293aa5f80017197205",
                "description": "dancing",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-14T20:55:05.455Z",
                "updatedAt": "2022-01-15T11:45:59.554Z",
                "__v": 0
            }
        ]
        const action = {
            type: 'DELETE_TASK',
            payload: "61e25fe77838470017aa7c05"
        }
        const newState = taskReducer(initialState, action);
        const result = newState.find((data) => {
            return data._id === action.payload
        })
        expect(result).toBe(undefined);
    })

    it('testing `UPDATE_TASK` action creators', () => {
        const initialState: Array<Object> = [
            {
                "completed": false,
                "_id": "61e25fe77838470017aa7c05",
                "description": "story writting",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-15T05:47:19.473Z",
                "updatedAt": "2022-01-15T05:47:19.473Z",
                "__v": 0
            },
            {
                "completed": false,
                "_id": "61e260007838470017aa7c06",
                "description": "going to temple",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-15T05:47:44.045Z",
                "updatedAt": "2022-01-15T05:47:44.045Z",
                "__v": 0
            },
            {
                "completed": true,
                "_id": "61e1e3293aa5f80017197205",
                "description": "dancing",
                "owner": "61e14ee73aa5f800171970fe",
                "createdAt": "2022-01-14T20:55:05.455Z",
                "updatedAt": "2022-01-15T11:45:59.554Z",
                "__v": 0
            }
        ]
        const action = {
            type: 'UPDATE_TASK',
            payload: "61e25fe77838470017aa7c05"
        }
        const newState = taskReducer(initialState, action);
        expect(newState).not.toEqual(initialState);
    })

})