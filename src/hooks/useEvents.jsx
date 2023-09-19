import { useQuery } from '@tanstack/react-query';

const useEvents = () => {
    const {
        data: Events = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ['Events'],
        queryFn: async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/events`);
                if (!res.ok) {
                    throw new Error('Network response failed!');
                }
                const data = await res.json();

                if (!data) {
                    return [];
                }

                return data;
            } catch (error) {
                console.error('Error fetching Events', error);
                throw error;
            }
        },
    });
    return [Events, loading, refetch];
};

export default useEvents;