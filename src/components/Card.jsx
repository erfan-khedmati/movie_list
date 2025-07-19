import React from "react";

function Card({ item }) {
  return (
    <li className="relative ">
      {/* Poster */}
      <img
        src={item.poster}
        alt={item.title}
        className="w-full h-auto rounded-xl"
      />
      {/* Info */}
      <div className="w-full h-16 flex flex-col items-stretch absolute bottom-0 left-0 bg-black/40 rounded-b-xl p-5 text-center font-semibold group transition-all duration-500 hover:h-full hover:bg-black/80">
        {/* Title */}
        <p className="truncate group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-clip">
          {item.title}
        </p>
        {/* Hidden Content */}
        <div className="h-full flex flex-col overflow-hidden group-hover:max-h-[1000px] max-h-0 transition-all duration-500 ease-in-out">
          <div className="my-5 text-start">
            <p className="opacity-0 transition-all duration-500 delay-300 ease-in group-hover:opacity-100">
              Country: {item.country}
            </p>
            <p className="opacity-0 transition-all duration-500 delay-400 ease-in group-hover:opacity-100">
              Genres: {item.genres.join(",")}
            </p>
            <p className="opacity-0 transition-all duration-500 delay-500 ease-in group-hover:opacity-100">
              Year: {item.year}
            </p>
          </div>
          {/* Images */}
          <div className="mt-auto">
            <img src={item.images[0]} alt="movie-image" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
