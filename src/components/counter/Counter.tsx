import React from 'react'

const Counter = () => {

    const [counter, setCounter] = React.useState(0);

    const handleChangeIncrement = () => {
        setCounter(counter + 1);
    }

    const handleChangeDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div data-test="counter-app">
            <h1 data-test="counter-display">{counter}</h1>
            <button
                data-test="increment-button"
                onClick={handleChangeIncrement}>
                Increment Counter
            </button>
            <button
                onClick={handleChangeDecrement}
                data-test="decrement-button">
                Decrement Counter
            </button>
        </div>
    )
}

export default Counter
