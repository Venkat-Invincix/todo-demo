import axios from "axios"
import { Dispatch } from 'redux'

export const asyncGetAllTasks = () => {
    return (dispatch: Dispatch) => {
        return axios.get('https://api-nodejs-todolist.herokuapp.com/task',
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then((response) => {
                const data = response.data;
                dispatch(getAllTasks(data.data));
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const getAllTasks = (data: object) => {
    return {
        type: 'GET_ALL_TASKS',
        payload: data
    }
}

export const asyncAddTask = (formData: object, clearForm?: any) => {
    return (dispatch: Dispatch) => {
        axios.post('https://api-nodejs-todolist.herokuapp.com/task', formData,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then((response) => {
                const data = response.data;
                dispatch(addTask(data.data));
                if (data.data) {
                    clearForm();
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
}

export const addTask = (data: object) => {
    return {
        type: 'ADD_TASK',
        payload: data
    }
}

export const asyncDeleteTask = (id: any) => {
    return (dispatch: Dispatch) => {
        const baseUrl = 'https://api-nodejs-todolist.herokuapp.com/task/';
        axios.delete(`${baseUrl}${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then((res) => {
                const result = res.data;
                if (result.success === true) {
                    console.log(res.data)
                    dispatch(deleteTask(id));
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const deleteTask = (id: any) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export const asyncUpdateTask = (id: any) => {
    return (dispatch: Dispatch) => {
        const baseUrl = 'https://api-nodejs-todolist.herokuapp.com/task/';
        axios.put(`${baseUrl}${id}`,
            {
                "completed": true
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then((response) => {
                const data = response.data;
                dispatch(updateTask(id));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
}

export const updateTask = (id: any) => {
    return {
        type: 'UPDATE_TASK',
        payload: id
    }
}

export const correctGuess = () => {
    return {
        type: 'CorrectGuess'
    }
}