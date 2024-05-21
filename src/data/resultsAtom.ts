import { atom } from "jotai";

export type ResultItem = {
  id: number;
  title: string;
  image_id: string;
  place_of_origin: string;
  date_end: number;
  artist_title: string;
  thumbnail?: { alt_text: string };
};

export const resultsAtom = atom<ResultItem[] | undefined>(undefined);
