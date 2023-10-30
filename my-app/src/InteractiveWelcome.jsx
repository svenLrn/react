import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome({age}){

   const [inputValue, setInputValue] = useState('')

    function handleInput(event) {
        setInputValue(event.target.value)
    }

    return(
        <div>
            <input onChange={handleInput} type="text" value={inputValue} />
            <Welcome age = {age} name ={inputValue}/>
        </div>
    )
}