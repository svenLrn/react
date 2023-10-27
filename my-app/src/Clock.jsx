import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(()=>{
       const intervalId = setInterval(() => {
            setDate((c)=> new Date())
        }, 1000)
        
        return()=>{
            clearInterval(intervalId)
        }
    }, [])

    return(
        <div>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}