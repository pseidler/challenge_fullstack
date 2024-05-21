import { atom } from "jotai";

export const FIELDS = {
  place_of_origin: "Place of origin",
  date_end: "Year",
  artist_title: "Artist",
} as const;

export const fieldAtom = atom<keyof typeof FIELDS>("place_of_origin");
