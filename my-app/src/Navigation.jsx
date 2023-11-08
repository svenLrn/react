import { Link } from "react-router-dom";

export function Navigation () {
    return (
        <div >
            <Link className="navigation" to="/">Welcome</Link>
            <Link className="navigation" to="/counter">Counter</Link>
            <Link className="navigation" to="/users/">Users</Link>
            {/* <Link className="navigation" to="/githubuser">GitHubUser</Link>
            <Link className="navigation" to="/profile">Profile</Link>
            <Link className="navigation" to="/home">Home</Link> */}
        </div>
        )
}