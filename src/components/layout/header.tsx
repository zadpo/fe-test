"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ProfileIcon } from "../icon/profile";
import { WalletIcon } from "../icon/wallet";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-[#00A6FF]" aria-hidden="true" />
              )}
            </button>
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Logo" width={92} height={20} />
            </Link>
          </div>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
            >
              {/* Flex container for icons and text */}
              <div className="flex items-end space-x-1">
                <WalletIcon />
                <p className="text-[#00A6FF] ">$1990.6</p>
                <ProfileIcon />
                <span className="hidden md:inline">Profile</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <Image src="/images/logo.png" alt="Logo" width={92} height={20} />
                </Link>

                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Home
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Games
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Favorites
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
