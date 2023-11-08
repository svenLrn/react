import { Age } from "./Age";
export const Welcome = ({name, age}) =>{
    return (
    <div className="welcome">
        <p>Welcome, {name}!</p>
        <Age age = {age}/>
    </div>
        
    
    )
}