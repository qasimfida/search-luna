import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants';

function useLunaRecipe(colorId) {
    const query = useQuery({
        queryKey: ['colorId', colorId],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}/recipe/${colorId}`);
            
            return response.data;
        },
        enabled: Boolean(colorId),
        placeholderData: {},
    });

    return query;
}

export default useLunaRecipe;