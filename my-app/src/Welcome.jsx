import { Age } from "./Age";
export const Welcome = ({name, age}) =>{
    return (
    <>
        <p>Welcome, <strong>{name}</strong>!</p>
        
        {age >= 18 ? <Age age = {age}/> : 'You are very young!'}
    </>
    )
}