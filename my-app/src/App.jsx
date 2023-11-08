import { Colors } from "./Colors";
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
            <TodoList/>
            <Welcome name={'John'} age={30}/>
        </div>
        
    )
}