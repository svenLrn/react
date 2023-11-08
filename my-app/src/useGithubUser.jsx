import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export function useGithubUser (username) {
  if (!username) {
    return {
      user: null,
      isLoading: false,
      isError: null,
    };
  }
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);


    return {
        user: data,
        isLoading: !data && !error,
        isError: error,
      };
    
    
}