import { Counter } from "./Counter";



export function App(){
    return(
        <div>
            <Counter initialValue = {2} increment = {5} />
        </div>
    )
}