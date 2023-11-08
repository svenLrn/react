import { Colors } from "./Colors";
import { TodoList } from "./TodoList";




export function App(){
    return(
        
        <div>
            <Colors colors={[
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ]}/>
            <TodoList/>
        </div>
        
    )
}