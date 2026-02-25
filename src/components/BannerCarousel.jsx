// import React, { useRef, useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Tag, Plane, Gift, Globe } from 'lucide-react';

// const banners = [
//   {
//     id: 1,
//     title: "REPUBLIC DAY",
//     highlight: "SALE",
//     description: "Exclusive discounts on domestic travel packages",
//     buttonText: "VIEW DEALS",
//     icon: <Sparkles className="w-5 h-5" />,
//     color: "bg-gradient-to-br from-red-500 to-orange-500",
//   },
//   {
//     id: 2,
//     title: "GO Thailand",
//     highlight: "Hotel Up To 50% OFF",
//     description: "Weekly deals on luxury accommodations",
//     buttonText: "BOOK NOW",
//     icon: <Globe className="w-5 h-5" />,
//     color: "bg-gradient-to-br from-blue-500 to-blue-600",
//   },
//   {
//     id: 3,
//     title: "Trip Talks India",
//     highlight: "SCAN HERE!",
//     description: "Join our community for travel tips & exclusive offers",
//     buttonText: "SUBSCRIBE",
//     icon: <Tag className="w-5 h-5" />,
//     color: "bg-gradient-to-br from-emerald-500 to-teal-600",
//   },
//   {
//     id: 4,
//     title: "FLIGHT DEALS",
//     highlight: "SAVE UP TO 30%",
//     description: "Limited time offers on international flights",
//     buttonText: "CHECK NOW",
//     icon: <Plane className="w-5 h-5" />,
//     color: "bg-gradient-to-br from-purple-500 to-purple-600",
//   },
//   {
//     id: 5,
//     title: "LUCKY DRAW",
//     highlight: "WIN FREE TRIPS",
//     description: "Participate and win exciting travel prizes",
//     buttonText: "ENTER NOW",
//     icon: <Gift className="w-5 h-5" />,
//     color: "bg-gradient-to-br from-amber-500 to-yellow-600",
//   }
// ];

// const BannerCarousel = () => {
//   const scrollRef = useRef(null);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(true);

//   const updateArrows = () => {
//     if (!scrollRef.current) return;

//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//     setShowLeftArrow(scrollLeft > 5);
//     setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
//   };

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;

//     const card = scrollRef.current.querySelector(".banner-card");
//     if (!card) return;

//     const cardWidth = card.offsetWidth + 16; // gap included

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -cardWidth : cardWidth,
//       behavior: "smooth"
//     });
//   };

//   useEffect(() => {
//     updateArrows();
//     window.addEventListener("resize", updateArrows);
//     return () => window.removeEventListener("resize", updateArrows);
//   }, []);

//   return (
//     <section className="relative py-6">
//       <div className="max-w-7xl mx-auto px-4 relative">

//         {/* Left Arrow */}
//         {showLeftArrow && (
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center"
//           >
//             <ChevronLeft size={18} />
//           </button>
//         )}

//         {/* Right Arrow */}
//         {showRightArrow && (
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center"
//           >
//             <ChevronRight size={18} />
//           </button>
//         )}

//         {/* Carousel */}
//         <div
//           ref={scrollRef}
//           onScroll={updateArrows}
//           className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
//         >
//           {banners.map((banner) => (
//             <div
//               key={banner.id}
//               className="banner-card flex-none w-[85%] sm:w-[60%] md:w-[360px] snap-start"
//             >
//               <div className={`h-[320px] ${banner.color} rounded-2xl p-6 text-white flex flex-col justify-between`}>
                
//                 <div>
//                   <div className="mb-4">
//                     <span className="text-xs opacity-80">BIRD MY TRIP</span>
//                   </div>

//                   <h3 className="text-lg font-bold mb-1">
//                     {banner.title}
//                   </h3>

//                   <h2 className="text-2xl font-extrabold mb-3">
//                     {banner.highlight}
//                   </h2>

//                   <p className="text-sm opacity-90 max-w-[220px]">
//                     {banner.description}
//                   </p>
//                 </div>

//                 <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold w-fit">
//                   {banner.buttonText}
//                   <ArrowRight size={14} />
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerCarousel;

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Tag, Plane, Gift, Globe } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: "REPUBLIC DAY",
    highlight: "SALE",
    description: "Exclusive discounts on domestic travel packages",
    buttonText: "VIEW DEALS",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-gradient-to-br from-red-500 to-orange-500",
  },
  {
    id: 2,
    title: "GO Thailand",
    highlight: "Hotel Up To 50% OFF",
    description: "Weekly deals on luxury accommodations",
    buttonText: "BOOK NOW",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Trip Talks India",
    highlight: "SCAN HERE!",
    description: "Join our community for travel tips & exclusive offers",
    buttonText: "SUBSCRIBE",
    icon: <Tag className="w-5 h-5" />,
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "FLIGHT DEALS",
    highlight: "SAVE UP TO 30%",
    description: "Limited time offers on international flights",
    buttonText: "CHECK NOW",
    icon: <Plane className="w-5 h-5" />,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    id: 5,
    title: "LUCKY DRAW",
    highlight: "WIN FREE TRIPS",
    description: "Participate and win exciting travel prizes",
    buttonText: "ENTER NOW",
    icon: <Gift className="w-5 h-5" />,
    color: "bg-gradient-to-br from-amber-500 to-yellow-600",
  }
];

const BannerCarousel = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".banner-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // gap included

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  return (
    <section className="relative py-6">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="banner-card flex-none w-full sm:w-[60%] md:w-[360px] snap-start"
            >
              <div className={`h-[320px] ${banner.color} rounded-2xl p-6 text-white flex flex-col justify-between`}>
                
                <div>
                  <div className="mb-4">
                    <span className="text-xs opacity-80">BIRD MY TRIP</span>
                  </div>

                  <h3 className="text-lg font-bold mb-1">
                    {banner.title}
                  </h3>

                  <h2 className="text-2xl font-extrabold mb-3">
                    {banner.highlight}
                  </h2>

                  <p className="text-sm opacity-90 max-w-[220px]">
                    {banner.description}
                  </p>
                </div>

                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  {banner.buttonText}
                  <ArrowRight size={14} />
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;