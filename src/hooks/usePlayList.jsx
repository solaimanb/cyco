import { useQuery } from '@tanstack/react-query';

const usePlayList = () => {
    const {
        data: playList = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ['playList'],
        queryFn: async () => {
          const res = await fetch('playListData.json');
          const data = await res.json();
          return data;
        },
      });
      return [playList, loading, refetch];
};

export default usePlayList;