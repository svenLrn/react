import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Navigation } from "./Navigation";
import { NotFound } from "./NotFound";
import { GitHubUsers } from "./GitHubUsers";




export function App(){
    return(
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Welcome name="John" age={30}/>} />
                <Route path="/counter" element={<Counter />} />
                <Route
                    path="/users"
                    element={
                        <div>
                        <h1>Add a user and select it</h1>
                        <GitHubUsers />
                        </div>
                    }
                    /> 
                <Route path="/users/:username" element={<ShowGithubUser />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
        
        
    )
}