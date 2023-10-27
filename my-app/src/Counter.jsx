import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0, increment = 1}) {
    const [counter, setCounter] = useState(initialValue);
    function handleCount() {
        setCounter((c)=> c+increment);
    }
    return (
        <div>
            <CounterDisplay counter = {counter}/>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}