import { Age } from "./Age";
export const Welcome = ({name, age}) =>{
    return (
    <>
        <p>Welcome, <strong>{name}</strong>!</p>
        
        {age >= 18 && age<=65 && name == 'John' ? <Age age = {age}/> : null}
    </>
    )
}