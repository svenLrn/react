import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Navigation } from "./Navigation";




export function App(){
    return(
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Welcome name="John" age={30}/>} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
            </Routes>
        </div>
        
        
    )
}