
// import React from "react";
// import { Music, Bus, Church, HeadphonesIcon, Plane, Gift, BadgePercent, Wallet } from "lucide-react";

// export default function ExploreMoreBar() {
//   return (
//     <div className="relative -mt-2.5 flex justify-center z-5 px-4 sm:px-2">
//       <div className="bg-white flex gap-10 sm:gap-4 md:gap-8 lg:gap-10 px-8 py-4 sm:px-4 sm:py-2 md:px-6 md:py-3.5 lg:px-8 lg:py-4 rounded-[40px] sm:rounded-2xl md:rounded-3xl shadow-2xl sm:shadow-md items-center justify-center overflow-x-auto scrollbar-none">
        
//         {/* Support */}
//         <a href="/support" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
//           <span className="flex items-center">
//             <HeadphonesIcon size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
//           </span>
//           <div>
//             <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Support</b>
//             <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">We're here 24/7</p>
//           </div>
//         </a>

//         {/* Flight Status */}
//         <a href="/flight-status" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
//           <span className="flex items-center">
//             <Plane size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
//           </span>
//           <div>
//             <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Flight Status</b>
//             <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Check departure</p>
//           </div>
//         </a>

//         {/* Invite & Earn */}
//         <a href="/invite" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
//           <span className="flex items-center">
//             <Gift size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
//           </span>
//           <div>
//             <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">
//               Invite & Earn <span className="bg-[#e05194] text-white text-[10px] sm:text-[6px] md:text-[8px] lg:text-[10px] px-1.5 py-0.5 sm:px-1 sm:py-0 rounded-full ml-1.5 font-medium">new</span>
//             </b>
//             <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Get ₹200 per invite</p>
//           </div>
//         </a>

//         {/* Offers */}
//         <a href="/offers" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
//           <span className="flex items-center">
//             <BadgePercent size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
//           </span>
//           <div>
//             <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Offers</b>
//             <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Best deals for you</p>
//           </div>
//         </a>

//         {/* Gift Cards */}
//         <a href="/gift" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
//           <span className="flex items-center">
//             <Wallet size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
//           </span>
//           <div>
//             <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Gift Cards</b>
//             <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Shop & travel vouchers</p>
//           </div>
//         </a>

//       </div>
//     </div>
//   );
// }














import React from "react";
import { Music, Bus, Church, HeadphonesIcon, Plane, Gift, BadgePercent, Wallet } from "lucide-react";

export default function ExploreMoreBar() {
  return (
    <div className="relative -mt-2.5 flex justify-center z-5 px-2 sm:px-2">
      <div className="bg-white flex gap-10 sm:gap-4 md:gap-8 lg:gap-10 px-4 py-4 sm:px-4 sm:py-2 md:px-6 md:py-3.5 lg:px-8 lg:py-4 rounded-[40px] sm:rounded-2xl md:rounded-3xl shadow-2xl sm:shadow-md items-center justify-start sm:justify-center overflow-x-auto scrollbar-none w-full max-w-full">
        
        {/* Support */}
        <a href="/support" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
          <span className="flex items-center">
            <HeadphonesIcon size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </span>
          <div>
            <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Support</b>
            <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">We're here 24/7</p>
          </div>
        </a>

        {/* Flight Status */}
        <a href="/flight-status" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
          <span className="flex items-center">
            <Plane size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </span>
          <div>
            <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Flight Status</b>
            <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Check departure</p>
          </div>
        </a>

        {/* Invite & Earn */}
        <a href="/invite" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
          <span className="flex items-center">
            <Gift size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </span>
          <div>
            <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">
              Invite & Earn <span className="bg-[#e05194] text-white text-[10px] sm:text-[6px] md:text-[8px] lg:text-[10px] px-1.5 py-0.5 sm:px-1 sm:py-0 rounded-full ml-1.5 font-medium">new</span>
            </b>
            <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Get ₹200 per invite</p>
          </div>
        </a>

        {/* Offers */}
        <a href="/offers" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
          <span className="flex items-center">
            <BadgePercent size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </span>
          <div>
            <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Offers</b>
            <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Best deals for you</p>
          </div>
        </a>

        {/* Gift Cards */}
        <a href="/gift" className="flex gap-3 sm:gap-1.5 md:gap-2 items-center cursor-pointer whitespace-nowrap flex-shrink-0 px-2 py-1.5 hover:bg-gray-50 rounded-lg transition-all">
          <span className="flex items-center">
            <Wallet size={20} className="text-[#008cff] sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </span>
          <div>
            <b className="text-sm sm:text-[9px] md:text-xs lg:text-sm font-semibold">Gift Cards</b>
            <p className="text-xs sm:text-[7px] md:text-[10px] lg:text-xs text-gray-500 m-0">Shop & travel vouchers</p>
          </div>
        </a>

      </div>
    </div>
  );
}