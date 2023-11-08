import { useState } from "react"

export function Login({ onLogin }) {

    const initialFormData = {
        login: '',
        password: '',
        remember: false
    };

    const [formData, setFormData] = useState(initialFormData);

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleReset(event) {
        setFormData(initialFormData);
    }

    function handleSubmit(event) {
        event.preventDefault();

        
        const formDataObject = new FormData();
        formDataObject.append("login", formData.login);
        formDataObject.append("password", formData.password);
        formDataObject.append("remember", formData.remember);

        
        onLogin(formDataObject);
    }
    // Big disadvantage is limited control, advantage is that it's easy to use
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="login" type="text" value={formData.login} onChange={handleInput} />
                <input name="password" type="password" value={formData.password} onChange={handleInput} />
                <input name="remember" type="checkbox" checked={formData.remember} onChange={handleInput} />
                <button type="submit" disabled={!formData.login || !formData.password}>Login</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}
