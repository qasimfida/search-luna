import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useCallback } from "react";
import useSearch from "./hooks/useSearch";
import useFacets from "./hooks/useFacets";

const makesMock = [
    'Audi',
];

const yearsMock = [
    '2024',
    '2023',
];

const modelsMock = [
    'A4',
    'A5',
    'A6',       
];


const COLOR_IMG_URL = 'https://storage.googleapis.com/luna-colors/images';

function App() {
    const [searchTerms, setSearchTerms] = useState({});
    const observer = useRef();

    const { data, isPending, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useSearch(searchTerms);
    const { data: facetsData, isLoading: isLoadingFacets } = useFacets(searchTerms);

    const lastFormula = useCallback((node) => {
        if (isFetching) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchNextPage();
            }
        });

        if (node && hasNextPage) observer.current.observe(node);
    }, [isFetching, fetchNextPage, hasNextPage]);

    const onSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setSearchTerms(data);
    }

    const onSelectCategory = (category, term) => {
        setSearchTerms({ ...searchTerms, [category]: term });
    };

    // Deselect search term by category
    const onDeselectCategory = (category) => {
        const { [category]: _, ...rest } = searchTerms;
        setSearchTerms(rest);
    };

    // Render search terms as comma separated string
    const renderSearchTerms = (searchTerms) => {
        // Get searchTerms values to array
        const values = Object.values(searchTerms);

        // Join array values to string by comma
        return values.join(", ");
    }

    return (
        <div className='w-full h-full overflow-y-auto'>
            {/*Search bar*/}
            <div className='w-1/2 mx-auto py-10'>
                <h3 className="text-3xl font-bold">
                    Color Search
                </h3>

                <form onSubmit={onSearch}>
                    <div className="flex relative rounded-md w-full max-w-xl">
                        <input type="text" name="q" id="query" placeholder="Color Code (e.g. 3R3)"
                            className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500" />
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-cc-blue text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                            <MagnifyingGlassIcon className="h-6 w-6" color={'#ffffff'} />
                        </button>
                    </div>
                </form>
            </div>

            {/* If search and make not selected display all makes */}
            {searchTerms.q && !searchTerms.make && facetsData.facetHits?.length > 0 && (
                <div className='px-10 py-10 bg-blue-100'>    
                    <div className="flex justify-between items-center">
                        <h3 className='text-2xl font-bold'>
                            Select Make ({renderSearchTerms(searchTerms)}) 
                        </h3>
                    </div>
                    

                    <div className='grid grid-cols-4 gap-4 mt-5'>
                        {facetsData.facetHits.map(({ value: make }) => (
                            <div 
                                key={make}
                                onClick={() => onSelectCategory('make', make)}
                                className='bg-gray-100 p-5 rounded-md cursor-pointer border-t-2 border-gray-500 hover:bg-gray-300'
                            >
                                <h4 className='text-xl'>{make}</h4>
                            </div>
                        ))}
                    </div>

                    {/*show all button*/}
                    {/* <div className='mt-5'>
                        <button className='bg-cc-blue text-white p-3 rounded-md block mx-auto'>
                            Show All
                        </button>
                    </div> */}
                </div>
            )}

            {/*Select Year*/}
            {/* If search and make selected display all years */}
            {searchTerms.q && searchTerms.make && !searchTerms.year && facetsData.facetHits?.length > 0 && (
                <div className='px-10 py-10 bg-blue-100'>
                    <div className="flex justify-between items-center">
                        <h3 className='text-2xl font-bold'>
                            Select Year ({renderSearchTerms(searchTerms)})
                        </h3>
                        {/* Back button */}
                        <button onClick={() => onDeselectCategory('make')} className='bg-cc-blue text-white p-3 rounded-md align-middle'>
                            Back
                        </button>
                    </div>

                    <div className='grid grid-cols-4 gap-4 mt-5'>
                        {facetsData.facetHits.map(({value: year}) => (
                            <div
                                key={year} 
                                onClick={() => onSelectCategory('year', year)}
                                className='bg-gray-100 p-5 rounded-md cursor-pointer border-t-2 border-gray-500 hover:bg-gray-300'
                            >    
                                <h4 className='text-xl'>{year}</h4>
                            </div>
                        ))}
                    </div>

                    {/*show all button*/}
                    {/* <div className='mt-5'>
                        <button className='bg-cc-blue text-white p-3 rounded-md block mx-auto'>
                            Show All
                        </button>
                    </div> */}
                </div>
            )}

            {/*Select Model*/}
            {/* If search, make and year selected display all models */}
            {searchTerms.q && searchTerms.make && searchTerms.year && !searchTerms.model && facetsData.facetHits?.length > 0 && (
                <div className='px-10 py-10 bg-blue-100'>
                    <div className="flex justify-between items-center">
                        <h3 className='text-2xl font-bold'>
                            Select Model ({renderSearchTerms(searchTerms)})
                        </h3>
                        {/* Back button */}
                        <button onClick={() => onDeselectCategory('year')} className='bg-cc-blue text-white p-3 rounded-md'>
                            Back
                        </button>
                    </div>

                    <div className='grid grid-cols-4 gap-4 mt-5'>
                        {facetsData.facetHits.map(({ value: model }) => (
                            <div
                                key={model}
                                onClick={() => onSelectCategory('model', model)}
                                className='bg-gray-100 p-5 rounded-md cursor-pointer border-t-2 border-gray-500 hover:bg-gray-300'
                            >
                                <h4 className='text-xl'>{model}</h4>
                            </div>
                        ))}
                    </div>

                    {/*show all button*/}
                    {/* <div className='mt-5'>
                        <button className='bg-cc-blue text-white p-3 rounded-md block mx-auto'>
                            Show All
                        </button>
                    </div> */}
                </div>
            )}

            {/*Select Color Information*/}
            {searchTerms.q && (
                // if loading show loading message
                isPending ? (
                    <div className='px-10 py-10'>
                        <h3 className='text-2xl font-bold'>
                            Loading...
                        </h3>
                    </div>
                ) : (
                    <div className='px-10 py-10'>
                        <h3 className='text-2xl font-bold'>
                            Color Information ({renderSearchTerms(searchTerms)})
                        </h3>
                        
                        {data.pages?.map((page, pageIndex) => (
                            <div key={`page-${pageIndex}`}>
                                {/* if no results display no results */}
                                {page.hits.length === 0 && (
                                    <div className='mt-5'>
                                        <h4>No results found</h4>
                                    </div>
                                )}

                                {page.hits?.length > 0 && (
                                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
                                        {page.hits.map((formula, index) => (
                                            <div 
                                                ref={page.hits.length === index + 1 ? lastFormula : null}
                                                key={formula['objectID']}
                                            >
                                                <div
                                                    className='bg-gray-100 p-5 rounded-md cursor-pointer border-t-2 border-gray-500 hover:bg-gray-300'
                                                >
                                                    <div className="text-xs text-gray-500 mb-12">{formula['color_code']} / {formula['color_name']}</div>
                                                    <h4 className='text-xl text-cc-blue mb-5'>{formula['makes'][0]}</h4>
                                                    <div>{formula['year_range']}</div>
                                                </div>
                                                <img className="w-full h-10" src={`${COLOR_IMG_URL}/${formula['objectID']}.png`} alt={formula['color_name']} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/*show all button*/}
                        {/* <div className='mt-5'>
                            <button className='bg-cc-blue text-white p-3 rounded-md block mx-auto'>
                                Show All
                            </button>
                        </div> */}
                    </div>
                )
            )}
        </div>

)
}

export default App
