import {
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import searchIndex from '../algolia';

const useSearch = (searchTerms) => {
  /**
   * Custom hook to search the index
   * @param {string} searchTerms - The search terms
   * @returns {object} query - The query object
   */
  
  const query = useInfiniteQuery({
    queryKey: ['search', searchTerms],
    queryFn : async ({ pageParam }) => {
      const q = searchTerms.q || '';
      const make = searchTerms.make || '';
      const year = searchTerms.year || '';
      const model = searchTerms.model || '';

      const facetFilters = [];
      if (make) {
        facetFilters.push(`makes:${make}`);
      }

      if (year) {
        facetFilters.push(`years:${year}`);
      }

      if (model) {
        facetFilters.push(`models:${model}`);
      }

      const results = await searchIndex.search(q, {
        page: pageParam, 
        facetFilters,
      });
      return results;
    },
    enabled: Boolean(searchTerms.q),
    placeholderData: [],
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page + 1 < lastPage.nbPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  return query;
}

export default useSearch;