import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";



export function App(){
    return(
        <div>
            <Login onLogin={()=> console.log('Logined')}/>
            <UncontrolledLogin onLogin={()=> console.log('Logined')}/>
        </div>
    )
}