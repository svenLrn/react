export function MouseClicker() {
    const handleClick = (event) => {
        console.log(event.target.name)
    }
    return(
        <div>
            <button onClick={handleClick} name = 'one'>Click</button>
        </div>
    )
}
