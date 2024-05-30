// Default version (all methods)
// import algoliasearch from 'algoliasearch';

// Search-only version
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('ZS4KL5JKS1', '968e8e2162b55aba67e44b30d517fb0d');
const index = client.initIndex('formulas');


export default index;