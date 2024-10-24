"use client";

import React, { useState } from "react";
import Banner from "@/components/Banner";
import CategorySelector from "@/components/CategorySelector";
import GameGrid from "@/components/GameGrid";
import ProviderFilter from "@/components/ProviderFilter";
import SearchBar from "@/components/SearchBar";
import { useGames } from "@/hooks/useGame";
import BottomTabBar from "@/components/BottomTabBar";

export default function Home() {
  const {
    games,
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
  } = useGames();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="max-w-md mx-auto border h-screen">
      <Banner />
      <div className="p-4 ">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onToggleSearch={toggleSearch}
        />
        {isSearchVisible && (
          <div className="my-4">
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          </div>
        )}
        <div className="my-4">
          <ProviderFilter selectedProvider={selectedProvider} onSelectProvider={setSelectedProvider} />
        </div>
        <GameGrid games={games} favorites={favorites} onToggleFavorite={toggleFavorite} />
      </div>
      <BottomTabBar activeTab="favorites" />
    </div>
  );
}
