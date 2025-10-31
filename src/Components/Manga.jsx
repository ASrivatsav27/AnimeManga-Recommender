import React from "react";
import useAniManga from "../hooks/useAniManga";
import { useOutletContext } from "react-router-dom";
const Manga = () => {
  const { searchQuery } = useOutletContext();
  const { media, loading, error } = useAniManga("manga", searchQuery);

  if (loading)
    return <p className="text-center mt-10 text-white">Loading Manga...</p>;
  if (error)
    return <p className="text-center mt-10 text-black">Error: {error}</p>;
  return (
    <section className="p-6">
      <h2 className="text-5xl text-center text-white font-bold mb-6">Manga</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
        {media.map((mangaItem) => (
          <div
            key={mangaItem.mal_id}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform furation-200 my-4"
          >
            <img
              src={
                mangaItem.images?.jpg.large_image_url ||
                mangaItem.images?.jpg.image_url
              }
              alt={mangaItem.title}
              className="w-5/6 h-77 object-cover mx-auto mt-4 "
            />

            <div className="p-3 text-center">
              <p className="text-sm font-medium text-gray-400 truncate">
                {mangaItem.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Manga;
