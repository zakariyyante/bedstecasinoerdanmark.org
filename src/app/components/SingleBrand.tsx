"use client";
import Image from "next/image";
import Link from "next/link";
import Star from "./Star";
import { track } from "@vercel/analytics";
import { useSearchParams } from "next/navigation";

interface Brand {
  img: any;
  bonusText: string;
  name: string;
  url: string;
  minDepo: string;
  mobileOnly?: boolean;
}

interface BrandsProps {
  brand: Brand;
  index: number;
}

const SingleBrand: React.FC<BrandsProps> = ({ brand, index }) => {
  const { img, bonusText, minDepo, name, url } = brand;
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");

  // Generate dynamic values based on index
  const score = (9.9 - index * 0.1).toFixed(1).replace('.', ',');
  const num = 5; // All casinos get 5 stars
  const viewCount = (1600 - index * 50).toString();

  // Function to construct the final URL with gclid parameter
  const constructUrl = () => {
    if (!gclid) return url;

    const separator = url.includes("?") ? "&" : "?";

    if (url.includes("clickid=")) {
      return url.replace("clickid=", `clickid=${gclid}`);
    } else {
      return `${url}${separator}clickid=${gclid}`;
    }
  };

  // Triggered on any click on the entire card (Link)
  const handleCardClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "brand_click",
      brand: name,
      url: constructUrl(),
      viewCount,
      clicked: "card",
    });

    track("Visit", { name });
  };

  // Triggered only when the CTA button is clicked
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "brand_click",
      brand: name,
      url: constructUrl(),
      viewCount,
      clicked: "button",
    });

    track("Visit", { name });

    window.open(constructUrl(), "_blank", "noopener");
  };

  const ribbons = [
    "Top Rated",
    "Editor's Pick",
    "Exclusive",
    "Fastest Payouts",
  ];

  const ribbonColors = [
    "from-purple-600 to-indigo-700",
    "from-pink-600 to-rose-600",
    "from-sky-600 to-cyan-600",
    "from-green-600 to-emerald-600",
  ];

  return (
    <Link
      href={constructUrl()}
      target="_blank"
      rel="noopener"
      onClick={handleCardClick}
      className="block group"
    >
      <div className="relative flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-700 rounded-2xl p-6 mb-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.01] cursor-pointer">
        {/* Ribbon */}
        {index < ribbons.length && (
          <div
            className={`absolute top-0 left-0 text-white text-sm font-semibold px-4 py-2 rounded-tl-2xl rounded-br-xl bg-gradient-to-r ${ribbonColors[index]} shadow-lg z-10`}
          >
            <span className="hidden sm:inline">{ribbons[index]}</span>
            <span className="sm:hidden">{ribbons[index].split(" ")[0]}</span>
          </div>
        )}

        {/* Main Content - 2 Columns */}
        <div className="grid grid-cols-2 gap-6 mb-4 mt-4">
          {/* Left Column - Logo and Rating */}
          <div className="flex flex-col">
            <div className="flex justify-center items-center mb-4">
              <Image
                src={img}
                alt={name}
                width={120}
                height={120}
                className="cover"
              />
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="scale-90">
                  <Star num={num} score={score} viewCount={viewCount} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Welcome Bonus and Min Deposit */}
          <div className="flex flex-col">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-400 font-medium mb-2">
                Welcome Bonus
              </div>
              <div className="text-xl font-bold text-yellow-400 leading-tight">
                {bonusText}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 font-medium mb-2">
                Min. Deposit
              </div>
              <div className="text-2xl font-bold text-green-400">{minDepo}</div>
            </div>
          </div>
        </div>

        {/* CTA Button - Full Width */}
        <div className="relative group">
          <button
            onClick={handleButtonClick}
            className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-2xl shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 relative z-10 hover:shadow-xl"
          >
            GET BONUS
          </button>
          <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 px-3 py-1.5 text-xs font-medium bg-gray-800 text-yellow-400 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            {Number(viewCount) - 100} valgte {name} i dag
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBrand;
