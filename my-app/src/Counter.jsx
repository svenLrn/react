import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);
    function handleCount() {
        setCounter((c)=> c+1);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}