import { useState } from "react"

export function Login({onLogin}){

    const [data, setData] = useState({
        login: '',
        password: '',
        remember: false
    })

    function handleInput(event){
        const name = event.target.name;
        const value = event.target.value
        const checked = event.target.checked 
        const type = event.target.type

        setData((d)=>{
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    function handleReset(event){
        setData((d)=>{
            return {
                ...data,
                login: '',
                password: '',
                remember: false
            }
        })
    }

    return(
        <div>
            <input name="login" type="text" value={data.login} onChange={handleInput} />
            <input name="password" type="password" value={data.password} onChange={handleInput}/>
            <input name="remember" type="checkbox" checked ={data.remember} onChange={handleInput}/>
            <button onClick={onLogin} disabled={!data.login || !data.password}>Login</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}