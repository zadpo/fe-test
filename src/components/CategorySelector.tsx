"use client";

import React from "react";
import { Category } from "@/types";
import { getCategories } from "@/utils/mockApi";
import { StartIcon } from "./icon/start";
import { NewIcon } from "./icon/new";
import { SlotIcon } from "./icon/slot";
import { LiveIcon } from "./icon/live";
import { JackpotIcon } from "./icon/jackpot";
import { SearchIcon } from "./icon/search";

interface Props {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  onToggleSearch: () => void;
}

const CategorySelector: React.FC<Props> = ({ selectedCategory, onSelectCategory, onToggleSearch }) => {
  const categories = getCategories();

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case "START":
        return <StartIcon />;
      case "NEW":
        return <NewIcon />;
      case "SLOTS":
        return <SlotIcon />;
      case "LIVE":
        return <LiveIcon />;
      case "JACKPOT":
        return <JackpotIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="flex overflow-x-auto py-4 gap-4">
      <button className="flex flex-col items-center justify-end" onClick={onToggleSearch}>
        <SearchIcon />
        <span className="text-base">SEARCH</span>
      </button>
      <div className="border-r border-gray-300" />
      {categories.map((category) => (
        <button
          key={category}
          className={`flex flex-col items-center rounded-full ${
            selectedCategory === category ? "text-blue-500" : "text-black"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {getCategoryIcon(category)}
          <span className="text-base">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
