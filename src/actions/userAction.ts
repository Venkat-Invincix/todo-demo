import axios from "axios"
import { Dispatch } from 'redux'


export const asyncLogin = (formData: Object) => {
    return (dispatch: Dispatch) => {
        axios.post('https://api-nodejs-todolist.herokuapp.com/user/login',
            formData
        )
            .then((res) => {
                const response = res.data;
                localStorage.setItem('token', response.token);
                dispatch(login(response.user))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const login = (data: Object) => {
    return {
        type: 'LOG_IN',
        payload: data
    }
}
