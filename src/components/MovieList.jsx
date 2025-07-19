import React, { useState } from "react";
// custom hook
import useFetch from "../hook/useFetch";

//component
import Pageination from "./Pageination";

function MovieList() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `https://moviesapi.ir/api/v1/movies?page=${page}`
  );
  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return (
    <ul className="w-full max-w-[1280px] p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
      <li className="h-70 rounded-2xl bg-white/20"></li>
    </ul>
    )
  }

  return (
    <>
      <ul className="w-full max-w-[1280px] p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.data.map((item) => (
          <li key={item.id} className="relative">
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-auto rounded-xl"
            />
            <div className="w-full absolute bottom-0 left-0 bg-black/40 rounded-b-xl p-5 text-center font-semibold">{item.title}</div>
          </li>
        ))}
      </ul>
      <Pageination
        page={page}
        pagesCount={data.metadata.page_count}
        onNext={setPage}
        onPrev={setPage}
      />
    </>
  );
}

export default MovieList;
