export function MouseClicker() {
    const handleButtonClick = (event) => {
        console.log(event.currentTarget.name) // it's printed, since we still using currentTarget on the button
    }
    const handleImgClick = (event) =>{
        console.log(event.currentTarget.src)
    }
    return(
        <div>
            <button onClick={handleButtonClick} name = 'one'><img onClick={handleImgClick} src="googoole.com" width="30px" height='30px' /> Click</button>
        </div>
    )
}

