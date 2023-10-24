import { Age } from "./Age";
export const Welcome = ({name, age}) =>{
    return (
    <>
        <p>Welcome, {name}!</p>
        {!!age && <Age age = {age}/>}
        {age === 0 && <Age age = {age}/>}
    </>
    )
}