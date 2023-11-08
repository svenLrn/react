import { useGithubUser } from "./useGithubUser";


export function GitHubUser({username}){
    const { user, isLoading, isError } = useGithubUser(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.login}</p>
      <img src={user.avatar_url} alt={user.name} />
    </div>
  );
}