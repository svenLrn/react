import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0, increment = 1}) {
    const [counter, setCounter] = useState(initialValue);
    const upDownRef = useRef(null);
    useEffect(() => {
        const direction =counter > initialValue ? "up" : counter < initialValue ? "down" : "unchanged";
        if (upDownRef.current !== direction && direction !== "unchanged") {
            upDownRef.current = direction;
            console.log("Direction:", upDownRef.current);
            
          }
      }, [counter, initialValue]);


    
    function handleCount() {
        setCounter((c)=> c+increment);
    }
    function handleDecrement() {
        setCounter((c)=> c-increment);
    }
    function resetCount() {
        setCounter(initialValue);
    }

    const counterDisplayStyle = {
        fontSize: '24px', 
        color: 'blue',    
        
      };


    return (
        <div>
            <CounterDisplay counter = {counter} style = {counterDisplayStyle}/>
            <button onClick={handleCount}>+{increment}</button>
            <button onClick={handleDecrement}>-{increment}</button>
            <button onClick={resetCount}>to {initialValue}</button>

        </div>
    )
}