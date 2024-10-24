import React from "react";

interface Props {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search games..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
};

export default SearchBar;
