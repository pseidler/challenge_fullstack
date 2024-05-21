import { resultsAtom } from "./resultsAtom";
import { useSetAtom } from "jotai";

const API_URL = "https://api.artic.edu/api/v1/artworks/search";

const PARAMS = {
  limit: 100,
  fields: [
    "id",
    "title",
    "image_id",
    "place_of_origin",
    "date_end",
    "artist_title",
    "thumbnail",
  ],
};

/**
 * Rewrite this hook so that it retrieves data from the Art Institute of Chicago
 * API instead of using the mock data (documentation is available here
 * https://api.artic.edu/docs/).
 *
 *
 */
export const useGetItems = () => {
  const setResultSet = useSetAtom(resultsAtom);

  setResultSet([
    {
      thumbnail: {
        alt_text: "Three-part bronze sculpture set of two clenched hands.",
      },
      date_end: 1888,
      artist_title: "Leonard Wells Volk",
      id: 566,
      image_id: "8ad03fff-be28-ab22-689c-8f022b5e181c",
      title: "Life Cast of the Hands and Face of Abraham Lincoln",
      place_of_origin: "United States",
    },
    {
      thumbnail: {
        alt_text:
          "A work made of etching with color pochoir additions on white wove paper.",
      },
      date_end: 1971,
      artist_title: "Salvador Dalí",
      id: 38603,
      image_id: "b8c58cbd-5fa8-0b75-d080-2d577cd5980b",
      title: "The Museum of Science and Industry",
      place_of_origin: "Spain",
    },
  ]);
};
