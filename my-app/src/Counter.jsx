import { useState } from "react";

export function Counter({initialValue = 0, increment = 1}) {
    const [counter, setCounter] = useState(initialValue);
    function handleCount() {
        setCounter((c)=> c+increment);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}