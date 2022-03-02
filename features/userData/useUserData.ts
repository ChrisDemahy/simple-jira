import useSWR from 'swr';
import fetcher from '../../helpers/fetcher';
export const useUserData = (id: number) => {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
