import React from 'react'

const Counter = () => {

    const [counter, setCounter] = React.useState(0);

    const handleChangeIncrement = () => {
        setCounter(counter + 1);
    }

    return (
        <div data-test="counter-app">
            <h1>App</h1>
            <button onClick={handleChangeIncrement}>
                Increment Counter
            </button>
        </div>
    )
}

export default Counter
