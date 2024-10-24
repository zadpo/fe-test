"use client";
import { Game, Category } from "../types";

const games: Game[] = [
  {
    id: "1",
    name: "Big Bad Wolf",
    img: "/images/badwolf.png",
    provider: "Pragmatic Play",
    category: "SLOTS",
  },
  {
    id: "2",
    name: "Sugar Rush",
    img: "/images/sugar.png",
    provider: "Expanse",
    category: "SLOTS",
  },
  {
    id: "3",
    name: "Shaolin Crew",
    img: "/images/shaolin.png",
    provider: "Every Matrix",
    category: "LIVE",
  },
  { id: "4", name: "Book of Egypt", img: "/images/egypt.png", provider: "Evolution", category: "TABLE" },
  { id: "5", name: "Pirates Power", img: "/images/pirates.png", provider: "Evolution", category: "TABLE" },
  {
    id: "6",
    name: "Crocodile Blitz",
    img: "/images/crocodile.png",
    provider: "Game Art",
    category: "JACKPOT",
  },
  {
    id: "7",
    name: "Big Bad Wolf",
    img: "/images/badwolf.png",
    provider: "Uzugi",
    category: "SLOTS",
  },
  {
    id: "8",
    name: "Sugar Rush",
    img: "/images/sugar.png",
    provider: "Pragmatic Play",
    category: "SLOTS",
  },
  {
    id: "9",
    name: "Shaolin Crew",
    img: "/images/shaolin.png",
    provider: "Every Matrix",
    category: "LIVE",
  },
  { id: "10", name: "Book of Egypt", img: "/images/egypt.png", provider: "Evolution", category: "TABLE" },
  { id: "11", name: "Pirates Power", img: "/images/pirates.png", provider: "Evolution", category: "TABLE" },
  {
    id: "12",
    name: "Crocodile Blitz",
    img: "/images/crocodile.png",
    provider: "Evolution",
    category: "JACKPOT",
  },

  // Add more games as needed
];

export const fetchGames = async (): Promise<Game[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 1000);
  });
};

export const getCategories = (): Category[] => {
  return ["START", "NEW", "SLOTS", "LIVE", "JACKPOT"];
};

export interface ProviderWithImage {
  name: string;
  image: string;
}

export const getProviders = (): ProviderWithImage[] => {
  const uniqueProviders = Array.from(new Set(games.map((game) => game.provider)));
  return uniqueProviders.map((provider) => ({
    name: provider,
    image: `/images/providers/${provider.toLowerCase().replace(" ", "-")}.png`,
  }));
};
