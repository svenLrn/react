export const AlertClock = () =>{
    return (
    <>
        <button onClick={() => alert(new Date().toLocaleTimeString())}>click</button>
    </>
    )
}