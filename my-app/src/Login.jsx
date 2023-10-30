import { useState } from "react"

export function Login(){

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

    return(
        <div>
            <input name="login" type="text" value={data.login} onChange={handleInput} />
            <input name="password" type="password" value={data.password} onChange={handleInput}/>
            <input name="remember" type="checkbox" checked ={data.remember} onChange={handleInput}/>
        </div>
    )
}