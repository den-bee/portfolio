import home from "./gamecase/gamecase-home.png";
import wishlist from "./gamecase/gamecase-wishlist.png";
import collection from "./gamecase/gamecase-collection.png";
import search from "./gamecase/gamecase-search.png";
import detail from "./gamecase/gamecase-detail.png";
import searchByConsole from "./gamecase/gamecase-searchbyconsole.png";
import paletteBlack from "./gamecase/gamecase-paletteblack.png";
import palettePurple from "./gamecase/gamecase-palettepurple.png";

export type TImageArrayItem = {
  src: string;
  alt: string;
};

export const gamecaseImagesArray: TImageArrayItem[] = [
  {src: home, alt: "Homepage"},
  {src: wishlist, alt: "Wishlist page"},
  {src: collection, alt: "Collection page"},
  {src: search, alt: "Search page"},
  {src: detail, alt: "Detail page"},
  {src: searchByConsole, alt: "Search By Console page"},
  {src: paletteBlack, alt: "Black color palette"},
  {src: palettePurple, alt: "Purple color palette"},
];
