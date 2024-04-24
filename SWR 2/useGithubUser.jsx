import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.status = response.status;
    throw error;
  }

  return response.json();
};


  const useGithubUser = (username) => {

    if (!username) {
      return { user: null, loading: false, error: null };
    }

    const { data: user, error } = useSWR(
        `https://api.github.com/users/${username}`,
      fetcher
    );

    const loading = !user && !error;

    return { user, loading, error };
  };


export default useGithubUser;