import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants';

function useLunaSearch(searchTerms) {
    const query = useQuery({
        queryKey: ['search', searchTerms],
        queryFn: async () => {
            const q = searchTerms.q || '';
            const response = await axios.get(`${BASE_URL}/search/?q=${q}`);
            
            return response.data;
        },
        enabled: Boolean(searchTerms.q),
        placeholderData: (previousValue, previousQuery) => {
            if (previousValue) {
                return previousValue;
            }

            return [];
        },
    });

    return query;
}

export default useLunaSearch;