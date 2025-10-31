import bleachlogo from "../assets/images/bleachlogo.png";
import onelogo from '../assets/images/onepiecelogo.png';
import search from '../assets/images/search.svg';
import luffy from '../assets/images/luffy.png'; // <-- 1. ADD THIS IMPORT
import Bleach from '../videos/bleach.mp4';
import onepiece from '../videos/Onepiece.mp4';

// Export your images and lists
export const searchImg = search;
export const luffyImg = luffy; // <-- 2. ADD THIS EXPORT

export const navLists = [

  { text: "Home", path: "/" }, 

  { text: "Anime", path: "/anime" },
  { text: "Manga", path: "/manga" }, 
  { text: "About", path: "/about" },    
]

// This is the correct data structure
export const animeList = [
  {
    id: 1,
    video: onepiece,
    logo: onelogo,
    alt: "One Piece Logo"
  },
  {
    id: 2,
    video: Bleach,
    logo: bleachlogo,
    alt: "Bleach Logo"
  }
];