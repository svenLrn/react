import { useGithubUser } from "./useGithubUser";

const fetcher = (url) => fetch(url).then((res) => res.json());
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
    </div>
  );
}