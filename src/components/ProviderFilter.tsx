"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { getProviders } from "../utils/mockApi";

interface Props {
  selectedProvider: string | null;
  onSelectProvider: (provider: string | null) => void;
}

export default function ProviderFilter({ selectedProvider, onSelectProvider }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const providers = getProviders();

  const handleSelectProvider = (provider: string | null) => {
    onSelectProvider(provider);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2  border rounded bg-white"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedProvider ? (
          <Image
            src={providers.find((p) => p.name === selectedProvider)?.image || "/images/providers/default.png"}
            alt={selectedProvider}
            width={100}
            height={100}
            className="rounded-sm"
          />
        ) : (
          <span className="text-gray-500">All Providers</span>
        )}
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-40 overflow-auto grid grid-cols-2 gap-2 p-2 "
          role="listbox"
        >
          {providers.map((provider) => (
            <li
              key={provider.name}
              role="option"
              className=" hover:bg-gray-100 cursor-pointer flex items-center justify-center bg-[#F2F2FA] rounded-lg"
              onClick={() => handleSelectProvider(provider.name)}
            >
              <Image
                src={provider.image}
                alt={provider.name}
                width={100}
                height={32}
                className="rounded-sm"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
