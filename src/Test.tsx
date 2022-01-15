// import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddTask, asyncGetAllTasks } from './actions/tasksAction';
import { asyncLogin } from './actions/userAction';

export const Test = () => {
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(asyncLogin({
            "email": "venkat@gmail.com",
            "password": "12345678"
        }))
        dispatch(asyncGetAllTasks())

    }

    return (
        <div>
            {/* <button onClick={handleSubmit}>Submit</button> */}
        </div>
    )
}
