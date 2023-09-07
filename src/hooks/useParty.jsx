import { useQuery } from '@tanstack/react-query';

const useParty = () => {
    const {
        data: party = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ['party'],
        queryFn: async () => {
            const res = await fetch('/public/party.json');
            const data = await res.json();
            return data;
        },
    });
    return [party, loading, refetch];
};

export default useParty;