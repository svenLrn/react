import { Age } from "./Age";
export const Welcome = ({name, age}) =>{
    return (
    <>
        <p>Welcome, {name}!</p>
        {age >= 18 && <Age age = {age}/>}
    </>
    )
}