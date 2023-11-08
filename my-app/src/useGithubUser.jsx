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

    const refreshData = () => {
      mutate(`https://api.github.com/users/${username}`);
    };

    return {
        user: data,
        isLoading: !data && !error,
        isError: error,
        refreshData,
      };
    
    
}