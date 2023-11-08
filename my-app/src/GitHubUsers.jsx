
import { useGithubUsers } from "./useGithubUsers";
import { Link, Route } from "react-router-dom";

export function GitHubUsers() {
  const { users, isLoading, isError } = useGithubUsers();
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

 

  return (
    <div>
      <h1>GitHub Users</h1>
      
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>
              {user.login}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
