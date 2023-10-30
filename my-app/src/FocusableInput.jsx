import { useEffect, useRef } from "react"

export function FocusableInput() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current?.focus()
        console.log('test')
    }, [])
    return(
        <input ref={inputRef} type="text" />
    )
}