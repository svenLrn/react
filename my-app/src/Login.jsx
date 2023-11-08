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
        const checked = event.target.checked // using event or FormData for example:
                                            // const formData = new FormData(event.target);
                                            // const name = formData.get("login");
                                            // const value = formData.get("password");
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

    function handleSubmit(event) {
        event.preventDefault(); 
        onLogin(); 
      }
    return(
        <div>
            {/* FormData and event.target.elements.namedItem('').value are standard API.
             not standart are using querySelector or event.target.''.value */}
            <form onSubmit={handleSubmit}>
                <input name="login" type="text" value={data.login} onChange={handleInput} />
                <input name="password" type="password" value={data.password} onChange={handleInput}/>
                <input name="remember" type="checkbox" checked ={data.remember} onChange={handleInput}/>
                <button type="submit" disabled={!data.login || !data.password}>Login</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}