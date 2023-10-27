export function MouseClicker() {
    const handleButtonClick = (event) => {
        console.log(event.target.name) 
    }
    
    return(
        <div>
            <button onClick={handleButtonClick} name = 'one'> Click</button>
            <button onClick={handleButtonClick} name = 'two'> Click</button>
            <button onClick={handleButtonClick} name = 'three'> Click</button>
        </div>
    )
}

