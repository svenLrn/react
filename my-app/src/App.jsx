import { Colors } from "./Colors";
import { Container } from "./Container";
import { LanguageProvider } from "./LanguageContext";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";
import { Clock } from "./Clock";




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
            <Container title="Container Title"><TodoList/></Container>
            <LanguageProvider>
                <Clock/>
            </LanguageProvider>
            
        </div>
        
    )
}