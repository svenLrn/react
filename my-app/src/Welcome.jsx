export const Welcome = ({name = 'Alex'}) =>{
    // If name isn't passed it just won't be rendered, and yes, you can set default value to the name
    return (
    <>
        <p>Welcome, {name}!</p> 
    </>
    )
}