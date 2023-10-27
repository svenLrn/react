export function MouseClicker() {
    const handleClick = (event) => {
        console.log(event.currentTarget.name)
    }
    return(
        <div>
            <button onClick={handleClick} name = 'one'><img width="30px" height='30px' /> Click</button>
        </div>
    )
}
