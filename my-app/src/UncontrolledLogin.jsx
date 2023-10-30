export function UncontrolledLogin({onLogin}){
    function handleSubmit(event) {
        event.preventDefault();
        onLogin() 
    }
    return(
        <form onSubmit={handleSubmit}>
                <input name="login" type="text"/>
                <input name="password" type="password"/>
                <input name="remember" type="checkbox"/>
                <button type="submit" >Login</button>
                <button type="reset" >Reset</button>
        </form>
    )
}