import { useQueries } from "@tanstack/react-query";

function useRecipeImages(colors) {
    const queries = useQueries({
        queries: colors.map((color) => ({
            queryKey: ["recipe", color['id']],
            queryFn: async () => {
                const response = await fetch(`https://spectro-images.e-mixing.eu/api.php?color_id=${color['parentId']}`);
                const data = await response.json();
                const { path } = data;
                
                return {
                    id: color['id'],
                    path
                };
            }
        })),
    });
    
    return queries;
}

export default useRecipeImages;
