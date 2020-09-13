import React, { useState } from 'react'

function Example() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2 style={{color: 'red'}}>Introducing Hooks</h2>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Example