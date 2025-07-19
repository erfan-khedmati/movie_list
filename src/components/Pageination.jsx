import React from "react";

const Pageination = ({ page, pagesCount, onNext, onPrev }) => {
  function handleNextPage() {
    if (page < 25) {
      onNext(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrevPage() {
    if (page > 1) {
      onPrev(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  
  return (
    <div className="flex mb-5">
      <button
        className="bg-white text-black px-3 py-1 rounded-l cursor-pointer hover:text-white hover:bg-black disabled:bg-white/70"
        onClick={handlePrevPage}
        disabled={page == 1}
      >
        Prev
      </button>
      <p className="bg-white/90 flex justify-center items-center text-black px-5">
        {page}
      </p>
      <button
        className="bg-white text-black px-3 py-1 rounded-r cursor-pointer hover:text-white hover:bg-black disabled:bg-white/70"
        onClick={handleNextPage}
        disabled={page == pagesCount}
      >
        next
      </button>
    </div>
  );
};

export default Pageination;
