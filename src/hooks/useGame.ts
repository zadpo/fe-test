"use client";

import { useState, useEffect } from "react";
import { Game, Category } from "../types";
import { fetchGames } from "../utils/mockApi";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });
  const [selectedCategory, setSelectedCategory] = useState<Category>("START");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const fetchedGames = await fetchGames();
        setGames(fetchedGames);
        setLoading(false);
      } catch {
        setError("Failed to load games");
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const toggleFavorite = (gameId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId];
      return newFavorites;
    });
  };

  const filteredGames = games
    .filter((game) => selectedCategory === "START" || game.category === selectedCategory)
    .filter((game) => game.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((game) => !selectedProvider || game.provider === selectedProvider);

  const favoriteGames = games.filter((game) => favorites.includes(game.id));

  return {
    games: filteredGames,
    favoriteGames,
    loading,
    error,
    favorites,
    toggleFavorite,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    selectedProvider,
    setSelectedProvider,
  };
};
