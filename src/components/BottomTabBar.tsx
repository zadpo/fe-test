"use client";

import React from "react";
import Link from "next/link";
import { Star, UserPlus, Video, DollarSign } from "lucide-react";

interface TabProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ icon, label, href, isActive }) => (
  <Link
    href={href}
    className={`flex flex-col items-center p-2 ${isActive ? "text-blue-500" : "text-gray-600"}`}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </Link>
);

interface BottomTabBarProps {
  activeTab: string;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2">
      <Tab icon={""} label="SPORTS" href="/sports" isActive={activeTab === "sports"} />
      <Tab
        icon={<Star size={24} />}
        label="FAVORITES"
        href="/favorites"
        isActive={activeTab === "favorites"}
      />
      <Tab icon={<UserPlus size={24} />} label="INVITE" href="/invite" isActive={activeTab === "invite"} />
      <Tab
        icon={<Video size={24} />}
        label="CASINO LIVE"
        href="/casino-live"
        isActive={activeTab === "casino-live"}
      />
      <Tab
        icon={<DollarSign size={24} />}
        label="CASHIER"
        href="/cashier"
        isActive={activeTab === "cashier"}
      />
    </div>
  );
};

export default BottomTabBar;
