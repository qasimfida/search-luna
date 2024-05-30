import { useCallback, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import useLunaSearch from "../hooks/useLunaSearch";
import { Modal } from "../components/modal";
import { useModal } from "../components/modal";
import Logo from "../assets/logo.png";
import useRecipeImages from "../hooks/useRecipeImages";
import useLunaRecipe from "../hooks/useLunaRecipe";
import { InitialSearch } from "./initialSearch";
import { SearchResults } from "./searchResults";
import { ColorsType } from "./colorType";
import { ModalLoader } from "../components/modal/Loader";
import searchIcon from "../assets/searchIcon.png";
import { SelectBrand } from "./selectBrand";
import { SelectModel } from "./selectModel";
import { ConfirmColor } from "./confirmColor";
import { debounce } from "./constants";
import { motion } from "framer-motion";
import  { SearchContent } from "../components/modal/accordian";
import SearchDrawer from "@/components/modal/searchDrawer";
import { CustomTooltip } from "@/components/modal/tooltip";
import { CustomButton } from "@/components/button";

const BASE_URL = "";
const NO_IMAGE =
  "https://storage.googleapis.com/luna-colors/lib/no-image-xs.png";

export default function Search() {
  const [searchTerms, setSearchTerms] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const { openModal } = useModal();
  const [selectedColor, setSelectedColor] = useState(null);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [resultsLoader, setResultsLoader] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [baseUrl, setBaseUrl] = useState(BASE_URL);
  const {
    step,
    setIsLoading,
    isLoading,
    setStep,
    hasSearchValue,
    setHasSearchValue,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
  } = useModal();
  const { data: searchResults, isFetching } = useLunaSearch(searchTerms);

  const imageQueries = useRecipeImages(searchResults);
  const { data: recipeData } = useLunaRecipe(selectedColor?.parentId);
  // https://luna-paint-api-m67qj3xqea-uc.a.run.app/recipe/c826cd16f5ad0c60e8c9d04bd4568da3874ef61d

  const getColorImage = useCallback(
    (color) => {
      const query = imageQueries.find((query) => query?.data?.id === color.id);
      // if (query?.data?.path) {
      //     return `url('${query.data.path}')`;
      // }

      return query?.data?.path || NO_IMAGE;
    },
    [imageQueries]
  );

  const onSearch = useCallback((e) => {
    e.preventDefault();
    setIsVisible(false);
    setSelectedColor(null);
    setAdvanceSearch(false);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (data.q.length) {
      setSearchTerms(data);
      setIsLoading(true);
      if (!searchResults.q) {
        setIsLoading(false);
      }
    } else {
      alert("Please enter a search term");
    }
  }, []);

  useEffect(() => {
    function openSearch() {
      openModal();
    }
    window.openSearch = openSearch;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSearchTerms({});
        setStep("1");
        setHasSearchValue(false);
        setIsLoading(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      delete window.openSearch;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, setStep]);

  const onColorClick = useCallback((color) => {
    setSelectedColor(color);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (!isFetching && !advanceSearch) {
      setStep("5");
    }
    if (value.length) {
      setHasSearchValue(true);
    } else {
      setHasSearchValue(false);
      setIsLoading(false);
      setSearchTerms({});
      setStep("1");
    }
    setSearchTerms((prev) => ({ ...prev, [name]: value }));
  };

  const debouncedHandleChange = useCallback(debounce(handleChange, 300), []);

  const onRecipeClick = useCallback(() => {
    if (!recipeData) {
      console.log("No formula found for the selected color");
      return;
    }

    const proudctData = JSON.stringify({
      color_code: selectedColor.code,
      color_name: selectedColor.name,
      price_tag: recipeData.suffix,
      imgSrc: getColorImage(selectedColor),
      imgAlt: `${selectedColor.code} - ${selectedColor.name}`,
    });

    const encryptedData = CryptoJS.AES.encrypt(
      proudctData,
      "zJqNXu6h82"
    ).toString();

    window.location.href = `${baseUrl}?data=${encodeURIComponent(
      encryptedData
    )}`;
  }, [recipeData, selectedColor]);

  const handleAdvanceClick = (e) => {
    e.preventDefault();
    if (window.innerWidth < 1024) {
      alert("Advanced search is coming soon!");
    }
    // setHasSearchValue(true);
    // setAdvanceSearch(true);
    // setIsSidebarCollapsed(true);

    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());

    // setIsVisible(false);
    // setSelectedColor(null);
    // setSearchTerms(data);
    // setIsLoading(true);

    // if (!searchResults.q) {
    //   setIsLoading(false);
    // }
    // setStep("2");
  };

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const initialDivVariants = {
    initial: { width: "100%" },
    shrink: { width: "35%" },
  };

  const extraDivVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: screenWidth < 768 ? "100%" : "65%", opacity: 1 },
  };

  return (
    <Modal className={!isLoading && "placeholder-data" }>
      <div className="cc-flex cc-flex-col cc-min-h-dvh cc-border-solid xl:cc-min-h-fit xl:cc-h-[calc(100dvh-2*1.75rem)] xl:cc-overflow-hidden xl:cc-flex-row">
        {!isSidebarCollapsed ? (
          <motion.div
            className={`cc-bg-white cc-text-white cc-m-auto cc-max-w-full cc-min-w-35 md:cc-max-w-35 ${
              hasSearchValue ? "xl:cc-m-0" : ""
            }`}
            animate={hasSearchValue ? "cc-w-full shrink" : "initial"}
            variants={initialDivVariants}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`cc-p-10 cc-m-auto ${
                hasSearchValue ? "cc-w-full" : "cc-max-w-full md:cc-p-0"
              } `}
            >
              <div className="cc-mb-6 md:cc-mb-12">
                <img src={Logo} alt="Logo" className="cc-w-2/3 cc-mx-auto" />
              </div>

              <h3 className="cc-text-xl md:cc-text-3xl cc-text-center cc-uppercase cc-font-heading cc-mb-3 cc-text-black cc-font-black">
                Search for your color
              </h3>

              <form id="advanced-search-form" onSubmit={onSearch}>
                <div className="cc-flex">
                  <input
                    type="text"
                    name="q"
                    id="query"
                    onChange={debouncedHandleChange}
                    placeholder="color code or color name (e.g. LY7C or Nardo Grey)"
                    className="cc-bg-[rgba(23,23,23,0.027)] hover:cc-bg-[rgba(23,23,23,0.045)] focus:cc-bg-[rgba(23,23,23,0.045)] cc-text-black cc-flex-1 cc-p-3 cc-rounded-md cc-border-r-white cc-placeholder-gray-500 cc-text-base cc-transition-all cc-duration-500 placeholder:cc-text-xs"
                  />
                  <button
                    type="submit"
                    className="cc-inline-flex cc-ml-2 cc-items-center cc-gap-2 cc-bg-[#6DC3F7] cc-text-white cc-text-lg cc-font-semibold cc-py-3 cc-px-4 md:cc-px-6 cc-rounded-md"
                  >
                    <img
                      src={searchIcon}
                      className="cc-h-6 cc-w-6 md:cc-h-8 md:cc-w-8 rotate-icon"
                      color={"#ffffff"}
                    />
                  </button>
                </div>
              </form>
              <div className="cc-flex cc-justify-center cc-items-center cc-gap-2 cc-mt-3">
                <CustomTooltip tooltipContent="Coming Soon...">
                  <CustomButton
                    className="cc-cursor-pointer cc-font-black cc-bg-black cc-text-white cc-py-3 md:cc-w-full"
                    onClick={handleAdvanceClick}
                    disabled={window.innerWidth > 768}
                  >
                    Advanced Search
                  </CustomButton>
                </CustomTooltip>
                <SearchDrawer
                  className="cc-block cc-w-full cc-relative md:cc-my-7 md:cc-max-w-[95%] cc-rounded-xl"
                  drawerTitle="Search Tips!"
                >
                  <SearchContent variant="drawer" />
                </SearchDrawer>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="cc-p-10">
            <button
              className="cc-px-4 cc-bg-black cc-text-white cc-rounded-full"
              onClick={() => setIsSidebarCollapsed(false)}
            >
              SEARCH
            </button>
          </div>
        )}

        {(isFetching || resultsLoader) && <ModalLoader />}

        {!isLoading && !isFetching && step === "1" && hasSearchValue && (
          <motion.div
            className="cc-flex cc-h-full"
            initial="hidden"
            animate="visible"
            variants={extraDivVariants}
            transition={{ duration: 0.5 }}
          >
            <InitialSearch isVisible={isVisible} />
          </motion.div>
        )}

        {!isLoading && !isFetching && step === "2" && <SelectBrand />}

        {!isLoading && !isFetching && step === "3" && <SelectModel />}

        {!isLoading && !isFetching && step === "4" && <ColorsType />}

        {!isLoading && !isFetching && step === "5" && (
          <SearchResults
            imageQueries={imageQueries}
            data={searchResults}
            onColorClick={onColorClick}
            searchQuery={searchTerms}
            setResultsLoading={setResultsLoader}
            setSearchTerms={setSearchTerms}
          />
        )}

        {!isLoading && !isFetching && step === "6" && !resultsLoader && (
          <ConfirmColor
            selectedColor={selectedColor}
            onRecipeClick={onRecipeClick}
            getColorImage={getColorImage}
            recipeData={recipeData}
            imageQueries={imageQueries}
          />
        )}
      </div>
    </Modal>
  );
}
