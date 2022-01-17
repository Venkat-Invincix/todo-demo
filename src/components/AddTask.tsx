import React from 'react'
import { useDispatch } from 'react-redux';
import { asyncAddTask } from '../actions/tasksAction';

const AddTask = () => {

    const [description, setDescription] = React.useState("");
    const dispatch = useDispatch();

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = e.currentTarget.value;
        setDescription(data);
    }

    const clearForm = () => {
        setDescription('');
    }

    const handleChangeAddTask = () => {
        const formData = {
            description: description
        }
        dispatch(asyncAddTask(formData, clearForm));
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleChangeDescription}
                value={description} />

            <button onClick={handleChangeAddTask}>Submit</button>
        </div>
    )
}

export default AddTask;