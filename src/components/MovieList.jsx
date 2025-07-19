import React, { useState } from "react";
// custom hook
import useFetch from "../hook/useFetch";

//component
import Pageination from "./Pageination";
import Card from "./Card";

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
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
        <li className="h-70 rounded-2xl bg-white/20 animate-pulse"></li>
      </ul>
    );
  }

  return (
    <>
      <ul className="w-full max-w-[1280px] p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.data.map((item) => (
          <Card key={item.id} item={item} />
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
