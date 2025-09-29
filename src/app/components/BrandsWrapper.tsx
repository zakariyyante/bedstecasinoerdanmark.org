'use client'
import React, { useState, useEffect } from "react";
import SingleBrand from "./SingleBrand";
import {
  ShieldCheckIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-emerald-400" />,
    label: "100% Legal & Safe",
  },
  {
    icon: <BanknotesIcon className="h-6 w-6 text-yellow-300" />,
    label: "Fast Withdrawals",
  },
  {
    icon: <CheckBadgeIcon className="h-6 w-6 text-cyan-300" />,
    label: "Verified Payouts",
  },
  {
    icon: (
      <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-indigo-300" />
    ),
    label: "24/7 Support",
  },
];

const BrandsWrapper = ({ mock }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Filter brands based on screen size
  const filteredMock = mock.filter((item: any) => {
    if (item.mobileOnly) {
      return isMobile; // Only show mobile-only brands on mobile
    }
    return true; // Always show regular brands
  });

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative z-0 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col px-4">
        {/* Embedded Feature Icons - Horizontal scroll on mobile, grid on larger screens */}
        <div className="mb-10">
          {/* Mobile: Horizontal scroll */}
          <div className="flex overflow-x-auto gap-4 pb-2 sm:hidden scrollbar-hide">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-center min-w-max px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30 shadow-sm"
              >
                {item.icon}
                <span className="text-sm text-gray-300 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          <ul className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-300">
            {features.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden xl:grid grid-cols-5 items-center text-center mb-6 text-gray-500 uppercase text-sm tracking-wide">
          <div>Casino</div>
          <div>Bonus</div>
          <div>Rating</div>
          <div>Min. Deposit</div>
          <div>Play Now</div>
        </div>

        {/* Brands List */}
        {filteredMock.map((item: any, index: number) => (
          <div className="px-2" key={index}>
            <SingleBrand brand={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsWrapper;
