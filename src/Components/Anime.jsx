import React from "react";
import useAniManga from "../hooks/useAniManga";
import { useOutletContext } from "react-router-dom";
const Anime = () => {
  const { searchQuery } = useOutletContext();
  const { media, loading, error } = useAniManga("anime", searchQuery);

  if (loading)
    return <p className="text-center mt-10 text-white">Loading Anime ...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <section className="p-6">
      <h2 className="text-6xl text-white text-center font-bold mb-6">Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {media.map((animeItem) => (
          <div
            key={animeItem.mal_id}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform furation-200 my-4"
          >
            <img
              src={animeItem.images?.jpg.image_url}
              alt={animeItem.title}
              className="w-6/12 h-77 object-cover mx-auto mt-4"
            />
            <div className="p-3">
              <p className=" text-lg font-bold text-center text-gray-400 truncate">
                {animeItem.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Anime;
