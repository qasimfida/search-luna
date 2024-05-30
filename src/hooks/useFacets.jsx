import { useQuery } from "@tanstack/react-query";
import indexSearch from "../algolia";


const useFacets = (searchTerms) => {
  /**
   * Custom hook to fetch the facets
   * @param {object} searchTerms - The search terms
   * @returns {object} query - The query object
   */
  
  const query = useQuery({
    queryKey: ['facets', searchTerms],
    queryFn : async () => {
      const q = searchTerms.q || '';
      const make = searchTerms.make || '';
      const year = searchTerms.year || '';
      const model = searchTerms.model || '';

      if (!make) {
        const results = await indexSearch.searchForFacetValues('makes', q, {});  

        return results;
      }

      if (!year) {
        const results = await indexSearch.searchForFacetValues('years', '', {
          filters: `makes:${make}`,
        });

        return results;
      }

      if (!model) {
        const results = await indexSearch.searchForFacetValues('models', '', {
          filters: `makes:${make} AND years:${year}`,
        });  

        return results;
      }

      return {};
    },
    enabled: Boolean(searchTerms.q),
    placeholderData: {},
  });

  return query;
}

export default useFacets;