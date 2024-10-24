"use client";

import React from "react";
import { useGames } from "@/hooks/useGame";
import GameGrid from "@/components/GameGrid";
import BottomTabBar from "@/components/BottomTabBar";

export default function Favorites() {
  const { favoriteGames, loading, error, favorites, toggleFavorite } = useGames();

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;

  return (
    <div className="max-w-md mx-auto pb-16">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Favorites</h1>
      </header>
      <div className="p-4">
        {favoriteGames.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">You haven&apos;t added any favorites yet.</p>
        ) : (
          <GameGrid games={favoriteGames} favorites={favorites} onToggleFavorite={toggleFavorite} />
        )}
      </div>
      <BottomTabBar activeTab="favorites" />
    </div>
  );
}
