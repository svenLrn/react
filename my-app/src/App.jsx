import { Login } from "./Login";



export function App(){
    return(
        <div>
            <Login onLogin={()=> console.log('Logined')}/>
        </div>
    )
}