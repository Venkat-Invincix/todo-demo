import React from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { asyncDeleteTask, asyncGetAllTasks, asyncUpdateTask } from '../actions/tasksAction';
import { asyncLogin } from '../actions/userAction';

export const Tasks = () => {

    const tasks: Array<Object> = useSelector((state: any) => {
        return state.tasks;
    })

    const dispatch = useDispatch();

    const handleChangeDelete = (id: any) => {
        dispatch(asyncDeleteTask(id));
    }

    const handleChangeCompleteTask = (id: any) => {
        dispatch(asyncUpdateTask(id))
    }

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(asyncGetAllTasks())
            dispatch(asyncLogin({
                "email": "venkat@gmail.com",
                "password": "12345678"
            }))
        }
    }, [])


    return (
        <div>
            {
                tasks && tasks.map((data: any, index: number) => {
                    return (
                        <div
                            key={index}
                            style={{ border: '1px solid grey', margin: '20px', height: '120px' }}
                        >
                            <p>{data.description}</p>
                            <div>
                                {
                                    data.completed ?
                                        <p>Completed</p> :
                                        <p>Not completed</p>
                                }
                                {
                                    data.completed === false &&
                                    <button onClick={() => handleChangeCompleteTask(data._id)}>
                                        complete the task
                                    </button>
                                }

                            </div>
                            <button onClick={() => { handleChangeDelete(data._id) }}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
