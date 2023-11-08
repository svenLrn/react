import { useState } from "react";
import { GitHubUser } from "./GitHubUser";
import { useGithubUsers } from "./useGithubUsers";

export function GitHubUsers() {
  const { users, isLoading, isError } = useGithubUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  const handleUserClick = (event, username) => {
    event.preventDefault();
    setSelectedUser(username);
  }

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <button onClick={(e) => handleUserClick(e, user.login)}>{user.login}</button>
            {selectedUser === user.login && <GitHubUser username={selectedUser} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
