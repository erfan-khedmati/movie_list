import React, { useState, useEffect, useRef } from "react";

// Costom Hook
import useFetch from "../hook/useFetch";

// Images
import SerachIcon from "../assets/search-icon.svg";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, loading, error } = useFetch(
    `https://moviesapi.ir/api/v1/movies?q=${searchValue}&page=`
  );

  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const handleToggleModal = (e) => {
      if (
        formRef.current.contains(e.target) ||
        (inputRef.current.contains(e.target) && searchValue.trim() != "")
      ) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", (e) => {
      handleToggleModal(e);
    });

    return () => document.removeEventListener("click", handleToggleModal);
  }, []);

  const handleInputChange = (e) => {
    // Set Value
    setSearchValue(e.target.value);

    // if the search value is empty close modal
    e.target.value.trim() == "" ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      ref={formRef}
      className="w-full relative max-w-[500px] border-2 rounded-2xl flex mt-5"
    >
      {/* Input field */}
      <input
        type="search"
        value={searchValue}
        ref={inputRef}
        onChange={(e) => {
          handleInputChange(e);
        }}
        className="w-full rounded-2xl rounded-r-none px-3 py-1 focus:outline-none"
      />
      {/* search button */}
      <button type="submit">
        <img src={SerachIcon} alt="search icon" className="w-7 pr-2" />
      </button>
      {/* Modal list */}
      {isModalOpen && (
        <ul className="w-full max-w-lg max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden flex flex-col gap-5 absolute top-full mt-5 left-0 bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-2 z-10">
          {loading ? (
            <p>Loading...</p>
          ) : (!data.data || data.data.length == 0) ? (
            <p className="text-center text-orange-400 bg-white/10 rounded-lg p-1">Nothing found</p>
          ) : (
            data?.data?.map((movie) => (
              <li className="p-3 hover:bg-white/10 rounded-2xl" key={movie.id}>
                <a href="#" className="flex gap-3">
                  <img
                    className="w-16 rounded-lg"
                    src={movie.poster}
                    alt={movie.title}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold truncate">{movie.title}</p>
                    <p>{Array.isArray(movie.genres) ? movie.genres.join(" , "): ""}</p>
                  </div>
                </a>
              </li>
            ))
          )}

          {/* {!loading &&
            data.length != 0 &&
            data.data.map((movie) => (
              <li className="p-3 hover:bg-white/10 rounded-2xl" key={movie.id}>
                <a href="#" className="flex gap-3">
                  <img
                    className="w-16 rounded-lg"
                    src={movie.poster}
                    alt={movie.title}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold truncate">{movie.title}</p>
                    <p>{movie.genres.join(" , ")}</p>
                  </div>
                </a>
              </li>
            ))} */}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;
