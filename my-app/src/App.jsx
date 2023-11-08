import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";




export function App(){
    return(
        
        <div>
            <Colors colors={[
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ]}/>
            
            <Welcome name={'John'} age={30}/>
            
            <Login onLogin={()=> console.log('Logined')}/>
            <Container><TodoList/></Container>
        </div>
        
    )
}