import { Age } from "./Age";
export const Welcome = ({name, age}) =>{
    return (
    <>
        <p>Welcome, {name}!</p>
        <Age age = {age}/>
    </>
    )
}