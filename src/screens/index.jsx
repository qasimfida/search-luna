/**
 * Displays a Find a Colour button that navigates to the Find a Colour screen
 */
function IndexScreen() {
    return (
        <div className="p-5 text-white bg-black">
            <h2 className="font-heading font-black text-4xl">Find your perfect color match</h2>
            <p className="font-body text-base mt-5">Find color matched paint by favourite make and model or by colour codes</p>
            <button className="mt-10 py-4 px-10 border-solid border-2 border-white rounded-full hover:text-black hover:bg-white transition-all ease-in duration-200">Find a Colour</button>
        </div>
    );
}

export default IndexScreen;