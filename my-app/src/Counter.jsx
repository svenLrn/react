import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0, increment = 1}) {
    const [counter, setCounter] = useState(initialValue);
    function handleCount() {
        setCounter((c)=> c+increment);
    }
    function handleDecrement() {
        setCounter((c)=> c-increment);
    }
    function resetCount() {
        setCounter(initialValue);
    }
    return (
        <div>
            <CounterDisplay counter = {counter}/>
            <button onClick={handleCount}>+{increment}</button>
            <button onClick={handleDecrement}>-{increment}</button>
            <button onClick={resetCount}>to {initialValue}</button>

        </div>
    )
}