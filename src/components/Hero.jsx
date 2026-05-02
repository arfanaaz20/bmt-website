import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bed,
  Plane,
  Hotel,
  Car,
  MapPin,
  Search,
  ChevronDown,
  ArrowLeftRight,
  Calendar,
  Building,
  Navigation,
  X,
  Check,
  Plus,
  Minus,
  Ship,
  Bus,
  Umbrella,
  Sparkles,
  Bell,
  Home,
  Briefcase,
  User,
  ChevronRight,
  Tag,
  Palmtree,
  Clock,
  Shield,
  Globe,
  Music,
} from "lucide-react";
import homeStayAndVillas from "../assets/Homestay&villasIcon.jpeg";
import flights from "../assets/1st.png";
import BusesNew from "../assets/2nd.png";
import flightHotels from "../assets/4th.png";
import HotelNew from "../assets/3rd.png";
import holidayPackagesNew from "../assets/travel.png";
import nightClubNew from "../assets/nightClub.png";
// import TrainNew from "../assets/train.png";
import clockNew from "../assets/Clock.png";
import CabCar from "../assets/cabCar.png";
import Taxi from "../assets/taxi.png";
import template from "../assets/template.png";
import CruiseNew from "../assets/cruiseNew.png";
import TourActivity from "../assets/TourActivity.png";
import viza from "../assets/viza.png";
import exchangeCurrency from "../assets/exchangeCurrency.png";
import airplane from "../assets/airplane.png";
import pnr from "../assets/ticket.png";
import Gift from "../assets/gift.png";
import inviteandEarn from "../assets/inviteandEarn.png";
import insuranceagent from "../assets/insurance-agent.png";
import { RecentSearches } from "./RecentSearches/RecentSearches";
/* ─── BRANimD COLORS ─── */
const BRAND = "#c0185e";
const BRAND_DARK = "#8f1145";
const BLUE = "#1a73e8";

/* ─────────────────────────────────────────────────────────
   SVG ICONS  — pixel-perfect recreations from screenshot
───────────────────────────────────────────────────────── */
const IconHotel = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="8"
      y="12"
      width="40"
      height="36"
      rx="2"
      fill="#2e7d32"
      opacity="0.15"
    />
    <rect
      x="8"
      y="12"
      width="40"
      height="36"
      rx="2"
      fill="none"
      stroke="#2e7d32"
      strokeWidth="2.5"
    />
    {/* floors */}
    {[17, 22, 27, 32, 37].map((y) => (
      <rect
        key={y}
        x="8"
        y={y}
        width="40"
        height="0.8"
        fill="#2e7d32"
        opacity="0.3"
      />
    ))}
    {/* windows */}
    {[14, 19, 24, 29, 34].map((y) =>
      [12, 19, 26, 33, 40].map((x) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="5"
          height="4"
          rx="0.5"
          fill="#2e7d32"
          opacity="0.5"
        />
      )),
    )}
    {/* door */}
    <rect
      x="23"
      y="38"
      width="10"
      height="10"
      rx="1"
      fill="#2e7d32"
      opacity="0.7"
    />
    <circle cx="30" cy="43" r="1" fill="#fff" />
    {/* flag */}
    <line x1="28" y1="4" x2="28" y2="13" stroke="#2e7d32" strokeWidth="1.5" />
    <polygon points="28,4 34,7 28,10" fill="#2e7d32" />
  </svg>
);

const IconFlight = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M8 34 L28 16 L44 20 L40 26 L28 24 L18 38 Z"
      fill="#1565c0"
      opacity="0.2"
    />
    <path
      d="M8 34 L28 16 L44 20 L40 26 L28 24 L18 38 Z"
      stroke="#1565c0"
      strokeWidth="0"
      fill="#1565c0"
      opacity="0.85"
    />
    {/* fuselage */}
    <path
      d="M10 32 Q18 18 34 18 L44 20 Q46 26 40 28 L28 26 L20 40 Z"
      fill="#1565c0"
    />
    {/* wing */}
    <path d="M22 26 L10 34 L14 36 L28 28 Z" fill="#1565c0" opacity="0.7" />
    {/* tail */}
    <path d="M38 20 L34 14 L30 18 Z" fill="#1565c0" />
    {/* window row */}
    {[26, 30, 34].map((x) => (
      <circle key={x} cx={x} cy="22" r="1.5" fill="white" opacity="0.9" />
    ))}
  </svg>
);

const IconFlightHotel = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* plane small top-right */}
    <path d="M26 8 Q30 4 38 6 L40 10 L34 12 L28 18 Z" fill="#6a1b9a" />
    <path d="M26 8 L30 16 L22 14 Z" fill="#6a1b9a" opacity="0.6" />
    {/* hotel bottom-left */}
    <rect
      x="6"
      y="22"
      width="28"
      height="26"
      rx="2"
      fill="#6a1b9a"
      opacity="0.15"
    />
    <rect
      x="6"
      y="22"
      width="28"
      height="26"
      rx="2"
      stroke="#6a1b9a"
      strokeWidth="2"
    />
    {[26, 30, 34, 38].map((y) => (
      <rect
        key={y}
        x="6"
        y={y}
        width="28"
        height="0.6"
        fill="#6a1b9a"
        opacity="0.25"
      />
    ))}
    {[8, 14, 20].map((x) =>
      [23, 27, 31, 35].map((y) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="4"
          height="3"
          rx="0.5"
          fill="#6a1b9a"
          opacity="0.5"
        />
      )),
    )}
    <rect
      x="14"
      y="38"
      width="8"
      height="10"
      rx="1"
      fill="#6a1b9a"
      opacity="0.7"
    />
    {/* + symbol */}
    <circle cx="42" cy="34" r="8" fill="#6a1b9a" opacity="0.15" />
    <text
      x="42"
      y="38"
      textAnchor="middle"
      fill="#6a1b9a"
      fontSize="12"
      fontWeight="bold"
    >
      +
    </text>
  </svg>
);

const IconBus = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="8"
      y="14"
      width="40"
      height="28"
      rx="4"
      fill="#1b5e20"
      opacity="0.15"
    />
    <rect
      x="8"
      y="14"
      width="40"
      height="28"
      rx="4"
      stroke="#1b5e20"
      strokeWidth="2.5"
    />
    {/* windshield */}
    <rect
      x="10"
      y="16"
      width="36"
      height="10"
      rx="2"
      fill="#1b5e20"
      opacity="0.3"
    />
    {/* windows */}
    {[10, 18, 26, 34].map((x) => (
      <rect
        key={x}
        x={x}
        y="28"
        width="7"
        height="6"
        rx="1"
        fill="#1b5e20"
        opacity="0.45"
      />
    ))}
    {/* line */}
    <rect x="8" y="36" width="40" height="1.5" fill="#1b5e20" opacity="0.4" />
    {/* door */}
    <rect
      x="22"
      y="28"
      width="7"
      height="6"
      rx="1"
      fill="#1b5e20"
      opacity="0.8"
    />
    {/* wheels */}
    <circle cx="17" cy="44" r="4" fill="#1b5e20" opacity="0.8" />
    <circle cx="17" cy="44" r="2" fill="white" />
    <circle cx="39" cy="44" r="4" fill="#1b5e20" opacity="0.8" />
    <circle cx="39" cy="44" r="2" fill="white" />
    {/* headlights */}
    <rect
      x="10"
      y="20"
      width="6"
      height="3"
      rx="1"
      fill="white"
      opacity="0.9"
    />
    <rect
      x="40"
      y="20"
      width="6"
      height="3"
      rx="1"
      fill="white"
      opacity="0.9"
    />
  </svg>
);

const IconHomestay = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* sun */}
    <circle cx="42" cy="14" r="6" fill="#ff8f00" opacity="0.8" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const r = (a * Math.PI) / 180;
      return (
        <line
          key={a}
          x1={42 + 9 * Math.cos(r)}
          y1={14 + 9 * Math.sin(r)}
          x2={42 + 11 * Math.cos(r)}
          y2={14 + 11 * Math.sin(r)}
          stroke="#ff8f00"
          strokeWidth="1.5"
          opacity="0.7"
        />
      );
    })}
    {/* palm tree */}
    <line x1="14" y1="48" x2="14" y2="28" stroke="#4e342e" strokeWidth="2.5" />
    <path d="M14 28 Q8 22 4 18 Q8 24 14 26" fill="#2e7d32" />
    <path d="M14 28 Q20 22 24 18 Q20 24 14 26" fill="#388e3c" />
    <path d="M14 30 Q6 28 2 26 Q8 28 14 30" fill="#2e7d32" opacity="0.7" />
    {/* house */}
    <polygon points="20,32 48,32 48,48 20,48" fill="#e65100" opacity="0.15" />
    <polygon
      points="20,32 48,32 48,48 20,48"
      fill="none"
      stroke="#e65100"
      strokeWidth="2"
    />
    <polygon points="16,32 34,20 52,32" fill="#e65100" opacity="0.7" />
    <rect
      x="30"
      y="38"
      width="8"
      height="10"
      rx="1"
      fill="#e65100"
      opacity="0.8"
    />
    <rect
      x="22"
      y="35"
      width="6"
      height="5"
      rx="1"
      fill="#e65100"
      opacity="0.5"
    />
    <rect
      x="40"
      y="35"
      width="6"
      height="5"
      rx="1"
      fill="#e65100"
      opacity="0.5"
    />
    <text x="9" y="54" fontSize="7" fill="#e65100" fontWeight="bold">
      HOMESTAY
    </text>
  </svg>
);

const IconHoliday = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* globe */}
    <circle cx="28" cy="28" r="20" fill="#880e4f" opacity="0.12" />
    <circle cx="28" cy="28" r="20" stroke="#880e4f" strokeWidth="2.5" />
    {/* longitude lines */}
    <ellipse
      cx="28"
      cy="28"
      rx="10"
      ry="20"
      stroke="#880e4f"
      strokeWidth="1.5"
      opacity="0.5"
    />
    <ellipse
      cx="28"
      cy="28"
      rx="20"
      ry="8"
      stroke="#880e4f"
      strokeWidth="1.5"
      opacity="0.5"
    />
    <line
      x1="8"
      y1="28"
      x2="48"
      y2="28"
      stroke="#880e4f"
      strokeWidth="1.5"
      opacity="0.5"
    />
    <line
      x1="28"
      y1="8"
      x2="28"
      y2="48"
      stroke="#880e4f"
      strokeWidth="1.5"
      opacity="0.5"
    />
    {/* pin */}
    <circle cx="36" cy="20" r="4" fill="#880e4f" />
    <path d="M36 24 L36 30" stroke="#880e4f" strokeWidth="2" />
    <path d="M33 22 Q36 28 39 22" fill="#880e4f" opacity="0.4" />
  </svg>
);

const IconNightClub = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* crowd silhouette */}
    <ellipse cx="14" cy="44" rx="8" ry="10" fill="#4527a0" opacity="0.8" />
    <ellipse cx="28" cy="40" rx="9" ry="14" fill="#4527a0" />
    <ellipse cx="42" cy="44" rx="8" ry="10" fill="#4527a0" opacity="0.8" />
    {/* raised hands */}
    <path
      d="M20 32 L16 22 M20 32 L24 22"
      stroke="#4527a0"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M34 28 L30 16 M34 28 L38 16"
      stroke="#4527a0"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* disco lights */}
    <circle cx="10" cy="8" r="3" fill="#e040fb" opacity="0.9" />
    <circle cx="28" cy="6" r="3" fill="#40c4ff" opacity="0.9" />
    <circle cx="46" cy="8" r="3" fill="#ffeb3b" opacity="0.9" />
    {/* light beams */}
    <path d="M10 11 L18 30" stroke="#e040fb" strokeWidth="1" opacity="0.4" />
    <path d="M28 9 L28 28" stroke="#40c4ff" strokeWidth="1" opacity="0.4" />
    <path d="M46 11 L38 30" stroke="#ffeb3b" strokeWidth="1" opacity="0.4" />
    {/* stars */}
    {[
      [22, 12],
      [40, 18],
      [6, 20],
    ].map(([x, y]) => (
      <text
        key={`${x}-${y}`}
        x={x}
        y={y}
        fontSize="8"
        fill="#ffeb3b"
        opacity="0.8"
      >
        ★
      </text>
    ))}
  </svg>
);

// const IconTrain = () => (
//   <svg
//     viewBox="0 0 56 56"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-full h-full"
//   >
//     {/* body */}
//     <rect
//       x="8"
//       y="14"
//       width="40"
//       height="28"
//       rx="6"
//       fill="#01579b"
//       opacity="0.15"
//     />
//     <rect
//       x="8"
//       y="14"
//       width="40"
//       height="28"
//       rx="6"
//       stroke="#01579b"
//       strokeWidth="2.5"
//     />
//     {/* front nose */}
//     <path d="M8 20 Q6 28 8 36" stroke="#01579b" strokeWidth="2" fill="none" />
//     {/* windows */}
//     <rect
//       x="12"
//       y="18"
//       width="10"
//       height="8"
//       rx="2"
//       fill="#01579b"
//       opacity="0.4"
//     />
//     <rect
//       x="26"
//       y="18"
//       width="10"
//       height="8"
//       rx="2"
//       fill="#01579b"
//       opacity="0.4"
//     />
//     <rect
//       x="12"
//       y="28"
//       width="10"
//       height="6"
//       rx="1"
//       fill="#01579b"
//       opacity="0.3"
//     />
//     <rect
//       x="26"
//       y="28"
//       width="10"
//       height="6"
//       rx="1"
//       fill="#01579b"
//       opacity="0.3"
//     />
//     {/* stripe */}
//     <rect x="8" y="24" width="40" height="3" fill="#01579b" opacity="0.6" />
//     {/* logo circle */}
//     <circle cx="42" cy="22" r="6" fill="#01579b" opacity="0.8" />
//     <text
//       x="42"
//       y="26"
//       textAnchor="middle"
//       fontSize="7"
//       fill="white"
//       fontWeight="bold"
//     >
//       IR
//     </text>
//     {/* wheels */}
//     <circle cx="16" cy="44" r="4.5" fill="#01579b" opacity="0.8" />
//     <circle cx="16" cy="44" r="2" fill="white" />
//     <circle cx="40" cy="44" r="4.5" fill="#01579b" opacity="0.8" />
//     <circle cx="40" cy="44" r="2" fill="white" />
//     {/* rail */}
//     <line
//       x1="4"
//       y1="48"
//       x2="52"
//       y2="48"
//       stroke="#01579b"
//       strokeWidth="2"
//       opacity="0.4"
//     />
//   </svg>
// );

const IconHourlyStay = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="28" cy="28" r="20" fill="#374151" opacity="0.1" />
    <circle cx="28" cy="28" r="20" stroke="#374151" strokeWidth="2.5" />
    <circle
      cx="28"
      cy="28"
      r="16"
      stroke="#374151"
      strokeWidth="1"
      opacity="0.3"
    />
    {/* hour markers */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
      const r = ((a - 90) * Math.PI) / 180;
      const inner = a % 90 === 0 ? 13 : 15;
      return (
        <line
          key={a}
          x1={28 + inner * Math.cos(r)}
          y1={28 + inner * Math.sin(r)}
          x2={28 + 17 * Math.cos(r)}
          y2={28 + 17 * Math.sin(r)}
          stroke="#374151"
          strokeWidth={a % 90 === 0 ? 2 : 1}
          opacity="0.6"
        />
      );
    })}
    {/* hands */}
    <line
      x1="28"
      y1="28"
      x2="28"
      y2="14"
      stroke="#374151"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="28"
      x2="38"
      y2="30"
      stroke="#374151"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="28" cy="28" r="2.5" fill="#374151" />
  </svg>
);

const IconAirportCab = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* car body */}
    <path
      d="M6 36 L6 44 L50 44 L50 36 L44 28 L32 24 L18 24 L10 28 Z"
      fill="#c62828"
      opacity="0.15"
    />
    <path
      d="M6 36 L6 44 L50 44 L50 36 L44 28 L32 24 L18 24 L10 28 Z"
      stroke="#c62828"
      strokeWidth="2.5"
      fill="none"
    />
    <path d="M6 36 L50 36" stroke="#c62828" strokeWidth="1.5" opacity="0.5" />
    {/* cabin */}
    <path d="M14 36 L16 26 L40 26 L42 36 Z" fill="#c62828" opacity="0.3" />
    {/* windows */}
    <path d="M18 27 L16.5 34 L26 34 L26 27 Z" fill="#c62828" opacity="0.5" />
    <path d="M28 27 L28 34 L38 34 L39.5 27 Z" fill="#c62828" opacity="0.5" />
    {/* wheels */}
    <circle cx="15" cy="44" r="5.5" fill="#c62828" opacity="0.8" />
    <circle cx="15" cy="44" r="2.5" fill="white" />
    <circle cx="41" cy="44" r="5.5" fill="#c62828" opacity="0.8" />
    <circle cx="41" cy="44" r="2.5" fill="white" />
    {/* taxi light */}
    <rect x="22" y="22" width="12" height="4" rx="2" fill="#ffb300" />
    <text
      x="28"
      y="25.5"
      textAnchor="middle"
      fontSize="4"
      fill="#333"
      fontWeight="bold"
    >
      TAXI
    </text>
    {/* plane small */}
    <path
      d="M38 12 L46 8 L48 12 L44 14 L40 18 Z"
      fill="#c62828"
      opacity="0.6"
    />
    <path d="M40 10 L38 14" stroke="#c62828" strokeWidth="1" opacity="0.5" />
  </svg>
);

const IconOutstationCab = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* yellow cab */}
    <path
      d="M6 36 L6 44 L50 44 L50 36 L44 28 L32 24 L18 24 L10 28 Z"
      fill="#f9a825"
      opacity="0.15"
    />
    <path
      d="M6 36 L6 44 L50 44 L50 36 L44 28 L32 24 L18 24 L10 28 Z"
      stroke="#f9a825"
      strokeWidth="2.5"
      fill="none"
    />
    <path d="M6 36 L50 36" stroke="#f9a825" strokeWidth="1.5" opacity="0.5" />
    <path d="M14 36 L16 26 L40 26 L42 36 Z" fill="#f9a825" opacity="0.3" />
    <path d="M18 27 L16.5 34 L26 34 L26 27 Z" fill="#f9a825" opacity="0.5" />
    <path d="M28 27 L28 34 L38 34 L39.5 27 Z" fill="#f9a825" opacity="0.5" />
    <circle cx="15" cy="44" r="5.5" fill="#f9a825" opacity="0.8" />
    <circle cx="15" cy="44" r="2.5" fill="white" />
    <circle cx="41" cy="44" r="5.5" fill="#f9a825" opacity="0.8" />
    <circle cx="41" cy="44" r="2.5" fill="white" />
    <rect x="22" y="22" width="12" height="4" rx="2" fill="#f9a825" />
    <text
      x="28"
      y="25.5"
      textAnchor="middle"
      fontSize="4"
      fill="white"
      fontWeight="bold"
    >
      TAXI
    </text>
    {/* road/highway indicator */}
    <path
      d="M4 50 Q28 46 52 50"
      stroke="#f9a825"
      strokeWidth="1.5"
      opacity="0.5"
      fill="none"
    />
  </svg>
);

const IconBMT = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* temple structure */}
    <rect
      x="14"
      y="32"
      width="28"
      height="18"
      rx="1"
      fill="#9a3412"
      opacity="0.2"
    />
    <rect
      x="14"
      y="32"
      width="28"
      height="18"
      stroke="#9a3412"
      strokeWidth="2"
    />
    {/* tiered roof */}
    <polygon points="10,32 28,22 46,32" fill="#9a3412" opacity="0.7" />
    <polygon points="14,26 28,18 42,26" fill="#9a3412" opacity="0.5" />
    <polygon points="18,22 28,16 38,22" fill="#9a3412" opacity="0.8" />
    {/* spire */}
    <line x1="28" y1="16" x2="28" y2="8" stroke="#9a3412" strokeWidth="2" />
    <circle cx="28" cy="7" r="2.5" fill="#9a3412" />
    {/* columns */}
    <rect x="18" y="32" width="3" height="18" fill="#9a3412" opacity="0.4" />
    <rect x="35" y="32" width="3" height="18" fill="#9a3412" opacity="0.4" />
    {/* door */}
    <path
      d="M24 50 L24 40 Q28 36 32 40 L32 50 Z"
      fill="#9a3412"
      opacity="0.7"
    />
    {/* windows */}
    <rect
      x="20"
      y="34"
      width="5"
      height="5"
      rx="1"
      fill="#9a3412"
      opacity="0.5"
    />
    <rect
      x="31"
      y="34"
      width="5"
      height="5"
      rx="1"
      fill="#9a3412"
      opacity="0.5"
    />
    {/* flag on top */}
    <path d="M28 8 L34 10 L28 12 Z" fill="#ff8f00" />
  </svg>
);

const IconCruise = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* water */}
    <path
      d="M4 44 Q14 40 24 44 Q34 48 44 44 Q50 41 52 44 L52 52 L4 52 Z"
      fill="#0288d1"
      opacity="0.3"
    />
    {/* hull */}
    <path d="M6 38 Q8 44 28 44 Q48 44 50 38 Z" fill="#0369a1" />
    <path d="M8 38 L10 32 L46 32 L48 38 Z" fill="#0369a1" opacity="0.8" />
    {/* superstructure */}
    <rect x="16" y="22" width="24" height="10" fill="#0369a1" opacity="0.6" />
    <rect x="20" y="14" width="16" height="8" fill="#0369a1" opacity="0.5" />
    {/* funnel */}
    <rect x="26" y="8" width="6" height="8" rx="1" fill="#e53935" />
    <line x1="29" y1="4" x2="29" y2="8" stroke="#333" strokeWidth="1.5" />
    {/* windows row */}
    {[18, 22, 26, 30, 34].map((x) => (
      <rect
        key={x}
        x={x}
        y="34"
        width="3"
        height="3"
        rx="0.5"
        fill="white"
        opacity="0.8"
      />
    ))}
    {[22, 26, 30].map((x) => (
      <rect
        key={x}
        x={x}
        y="25"
        width="3"
        height="3"
        rx="0.5"
        fill="white"
        opacity="0.7"
      />
    ))}
    {/* flag */}
    <line x1="40" y1="14" x2="40" y2="8" stroke="#333" strokeWidth="1" />
    <path d="M40 8 L46 10 L40 12 Z" fill="#e53935" />
  </svg>
);

const IconTour = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* person with flag */}
    <circle cx="24" cy="14" r="6" fill="#15803d" opacity="0.8" />
    <path
      d="M18 20 L18 38 L24 38 L24 28 L30 38 L36 38 L28 20 Z"
      fill="#15803d"
      opacity="0.7"
    />
    {/* flag pole */}
    <line x1="24" y1="14" x2="38" y2="6" stroke="#15803d" strokeWidth="2" />
    <path d="M38 6 L46 10 L38 14 Z" fill="#e53935" />
    {/* path/road */}
    <path
      d="M8 48 Q28 42 48 48"
      stroke="#15803d"
      strokeWidth="2"
      opacity="0.4"
      fill="none"
      strokeDasharray="3,2"
    />
    {/* pin markers */}
    <circle cx="14" cy="44" r="3" fill="#ff8f00" opacity="0.8" />
    <circle cx="38" cy="42" r="3" fill="#ff8f00" opacity="0.8" />
    <line x1="14" y1="44" x2="14" y2="50" stroke="#ff8f00" strokeWidth="1.5" />
    <line x1="38" y1="42" x2="38" y2="48" stroke="#ff8f00" strokeWidth="1.5" />
  </svg>
);

const IconVisa = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* passport */}
    <rect
      x="10"
      y="8"
      width="36"
      height="44"
      rx="3"
      fill="#991b1b"
      opacity="0.8"
    />
    <rect x="12" y="10" width="32" height="40" rx="2" fill="#b91c1c" />
    {/* emblem circle */}
    <circle cx="28" cy="24" r="8" fill="#991b1b" opacity="0.8" />
    <circle
      cx="28"
      cy="24"
      r="6"
      fill="none"
      stroke="#fca5a5"
      strokeWidth="1"
      opacity="0.7"
    />
    {/* eagle/emblem */}
    <path
      d="M24 22 Q28 18 32 22 L30 28 L28 26 L26 28 Z"
      fill="#fca5a5"
      opacity="0.9"
    />
    {/* lines */}
    <rect
      x="14"
      y="36"
      width="28"
      height="2"
      rx="1"
      fill="#fca5a5"
      opacity="0.6"
    />
    <rect
      x="14"
      y="40"
      width="20"
      height="2"
      rx="1"
      fill="#fca5a5"
      opacity="0.4"
    />
    <rect
      x="14"
      y="44"
      width="24"
      height="2"
      rx="1"
      fill="#fca5a5"
      opacity="0.4"
    />
    {/* PASSPORT text */}
    <text
      x="28"
      y="34"
      textAnchor="middle"
      fontSize="5"
      fill="#fca5a5"
      fontWeight="bold"
      opacity="0.9"
    >
      PASSPORT
    </text>
  </svg>
);

const IconInsurance = () => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* person */}
    <circle cx="28" cy="14" r="6" fill="#0369a1" opacity="0.7" />
    <path
      d="M20 22 Q20 30 28 32 Q36 30 36 22 L34 20 L28 22 L22 20 Z"
      fill="#0369a1"
      opacity="0.6"
    />
    {/* shield */}
    <path
      d="M14 28 L28 24 L42 28 L42 40 Q42 48 28 52 Q14 48 14 40 Z"
      fill="#0369a1"
      opacity="0.2"
    />
    <path
      d="M14 28 L28 24 L42 28 L42 40 Q42 48 28 52 Q14 48 14 40 Z"
      stroke="#0369a1"
      strokeWidth="2.5"
      fill="none"
    />
    {/* check */}
    <path
      d="M20 38 L26 44 L38 32"
      stroke="#16a34a"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* stars */}
    <text x="44" y="16" fontSize="8" fill="#f59e0b">
      ★
    </text>
    <text x="6" y="20" fontSize="6" fill="#f59e0b" opacity="0.6">
      ★
    </text>
  </svg>
);

/* ─── SERVICE DATA ─── */
const MOB_ROW1 = [
  {
    id: "Hotels",
    label: "Hotels",
    icon: HotelNew,
    bg: "#f0fdf4",
    border: "#bbf7d0",
    svg: true,
  },
  {
    id: "Flights",
    label: "Flights",
    icon: flights,
    bg: "#f0fdf4",
    border: "#bbf7d0",
    svg: true,
  },

  {
    id: "Flights + Hotels",
    label: "Flights + Hotels",
    icon: flightHotels,
    bg: "#faf5ff",
    border: "#e9d5ff",
    svg: true,
  },
  {
    id: "Bus",
    label: "Buses",
    icon: BusesNew,
    bg: "#f0fdf4",
    border: "#bbf7d0",
    svg: true,
  },
];

const MOB_ROW2 = [
  {
    id: "Homestay & Villas",
    label: "Homestay &\nVillas",
    icon: homeStayAndVillas,
    bg: "#f5f3ff",
    border: "#ddd6fe",
    badge: "new",
    svg: true,
  },
  {
    id: "Holiday Packages",
    label: "Holiday\nPackages",
    icon: holidayPackagesNew,
    bg: "#fff1f2",
    border: "#fecdd3",
    svg: true,
  },
  {
    id: "Night Club",
    label: "Night Club",
    icon: nightClubNew,
    bg: "#fff7ed",
    border: "#fed7aa",
    svg: true,
  },
  // {
  // //   id: "Trains",
  // //   label: "Trains",
  // //   icon: TrainNew,
  // //   bg: "#eff6ff",
  // //   border: "#bfdbfe",
  // //   svg: true,
  // // },
];

const MOB_ROW3 = [
  {
    id: "hourlystay",
    label: "Hourly Stay",
    icon: clockNew,
    bg: "#f9fafb",
    border: "#e5e7eb",
    svg: true,
  },
  {
    id: "airportcab",
    label: "Airport Cab",
    icon: CabCar,
    bg: "#fff7ed",
    border: "#fed7aa",
    svg: true,
  },
  {
    id: "outstationcab",
    label: "Outstation Cab",
    icon: Taxi,
    svg: true,
    bg: "#fefce8",
    border: "#fef08a",
  },
  {
    id: "bmt",
    label: "BMT Darshan",
    icon: template,
    bg: "#fff7ed",
    svg: true,
    border: "#fdba74",
  },
];
const MOB_ROW4 = [
  {
    id: "cruise",
    label: "Cruise",
    icon: CruiseNew,
    bg: "#f0f9ff",
    border: "#bae6fd",
    svg: true,
  },
  {
    id: "tours",
    label: "Tour &\nActivities",
    icon: TourActivity,
    bg: "#f0fdf4",
    border: "#bbf7d0",
    svg: true,
  },
  {
    id: "visa",
    label: "Visa",
    icon: viza,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
   {
    id: "forexCurrency",
    label: "Forex & Currency",
    icon: exchangeCurrency,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
  {
    id: "flightStatus",
    label: "Flight Status",
    icon: airplane,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
   {
    id: "pnrStatus",
    label: "PNR Status",
    icon: pnr,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
   
   {
    id: "eGiftCard",
    label: "E-Gift",
    icon: Gift,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
   {
    id: "inviteandEarn",
    label: "Invite & Earn",
    icon: inviteandEarn,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
   {
    id: "insuranceagent",
    label: "Travel Insurance",
    icon: insuranceagent,
    svg: true,
    bg: "#fff1f2",
    border: "#fecdd3",
  },
  // {
  //   id: "insurance",
  //   label: "Travel\nInsurance",
  //   icon: "🛡️",
  //   bg: "#f0f9ff",
  //   border: "#bae6fd",
  // },
];

const OFFER_TABS = [
  "Trending",
  "Flights",
  "Hotels",
  "Packages",
  "International",
];
const OFFER_CARDS = [
  {
    title: "Mumbai ↔ Goa",
    sub: "From ₹1,899",
    tag: "FLIGHTS",
    bg: "#dbeafe",
    accent: "#1d4ed8",
    em: "✈️",
  },
  {
    title: "Goa Resorts",
    sub: "Upto 40% off",
    tag: "HOTELS",
    bg: "#dcfce7",
    accent: "#15803d",
    em: "🏨",
  },
  {
    title: "Kerala Pkg",
    sub: "5N/6D ₹12,999",
    tag: "PACKAGES",
    bg: "#fce7f3",
    accent: "#9d174d",
    em: "🌴",
  },
  {
    title: "Dubai Special",
    sub: "From ₹24,999",
    tag: "INTL",
    bg: "#fef3c7",
    accent: "#92400e",
    em: "🕌",
  },
];

/* ─── COUNTER ─── */
const Counter = ({ label, sub, val, min = 0, max = 9, onChange }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-0">
    <div>
      <p className="font-semibold text-sm text-gray-900">{label}</p>
      {sub && <p className="text-xs text-gray-500">{sub}</p>}
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={() => val > min && onChange(val - 1)}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${val > min ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-50 text-gray-300 cursor-not-allowed"}`}
      >
        <Minus size={14} />
      </button>
      <span className="w-6 text-center font-bold text-sm">{val}</span>
      <button
        onClick={() => val < max && onChange(val + 1)}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${val < max ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-50 text-gray-300 cursor-not-allowed"}`}
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);

/* ─── SERVICE TILE COMPONENT ─── */
const ServiceTile = ({ item, active, onClick, large = false, row }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-2 rounded-2xl transition-all active:scale-95 ${large ? "p-3" : "p-2"}`}
    style={{
      background: active ? "#eff6ff" : "white",
      ...(row
        ? {
            // border: `1.5px solid ${active ? "#3b82f6" : item.border}`,
            boxShadow: active
              ? "0 0 0 2px #bfdbfe"
              : "0 1px 3px rgba(0,0,0,0.06)",
          }
        : {}),
    }}
  >
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full"
      // style={{ background: item.bg, border: `1px solid ${item.border}` }}
    >
      {item?.svg ? (
        <>
          <img src={item.icon} className="w-full h-full" alt="" />{" "}
        </>
      ) : (
        item.icon
      )}
    </div>
    <span
      className={`${large ? "text-[12px]" : "text-[10px]"} font-semibold text-gray-800 text-center leading-tight whitespace-pre-line`}
    >
      {item.label}
    </span>
  </button>
);

/* ══════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════ */
const Hero = () => {
  const navigate = useNavigate();

  /* shared state */
  const [modal, setModal] = useState(null);
  const [calCtx, setCalCtx] = useState(null);
  const [tempStart, setTempStart] = useState(null);
  const [tempEnd, setTempEnd] = useState(null);
  const [pickingEnd, setPickingEnd] = useState(false);
  const [tempGuests, setTempGuests] = useState({
    rooms: 1,
    adults: 2,
    children: 0,
  });
  const [guestsCtx, setGuestsCtx] = useState("");

  /* desktop state */
  const [activeTab, setActiveTab] = useState("Hotels");
  const [hotelsData, setHotelsData] = useState({
    destination: "",
    checkIn: "Tue, Feb 18",
    checkOut: "Wed, Feb 19",
    rooms: 1,
    adults: 2,
    children: 0,
  });
  const [flightsData, setFlightsData] = useState({
    tripType: "return",
    from: "Delhi",
    to: "Mumbai",
    departure: "Wed, Feb 19",
    returnDate: "Mon, Feb 24",
    travelers: 1,
    travelClass: "Economy",
  });
  const [flightHotelData, setFlightHotelData] = useState({
    from: "Delhi",
    to: "Goa",
    departure: "Wed, Feb 19",
    return: "Sat, Feb 22",
    rooms: 1,
    adults: 2,
  });
  const [busData, setBusData] = useState({
    from: "",
    to: "",
    departureDate: "Tue, Feb 18",
    passengers: 1,
  });
  const [cabData, setCabData] = useState({
    pickup: "Delhi Airport (DEL)",
    pickupDate: "Thu, Feb 20",
    dropoffDate: "Sun, Feb 23",
    licenseCountry: "India",
    differentLocation: false,
  });
  const [cruiseData, setCruiseData] = useState({
    destination: "",
    departurePort: "Mumbai",
    departureDate: "Wed, Feb 19",
    returnDate: "Sat, Feb 22",
    rooms: 1,
    adults: 2,
    children: 0,
  });
  const [tourData, setTourData] = useState({
    destination: "",
    checkIn: "Wed, Feb 19",
    checkOut: "Sat, Feb 22",
    adults: 2,
    children: 0,
  });
  const [holidayData, setHolidayData] = useState({
    from: "Delhi",
    to: "Goa",
    departure: "Wed, Feb 19",
    return: "Sat, Feb 22",
    rooms: 1,
    adults: 2,
    children: 0,
  });

  /* mobile state */
  const [activeService, setActiveService] = useState(null);
  const [activeOfferTab, setActiveOfferTab] = useState("Trending");
  const [expanded, setExpanded] = useState(false);
  const [aiQuery, setAiQuery] = useState("");

  /* refs */
  const hotelsDestRef = useRef(""),
    flightsFromRef = useRef("Delhi"),
    flightsToRef = useRef("Mumbai");
  const flightHotelFromRef = useRef("Delhi"),
    flightHotelToRef = useRef("Goa");
  const busFromRef = useRef(""),
    busToRef = useRef(""),
    cabPickupRef = useRef("Delhi Airport (DEL)");
  const cruiseDestRef = useRef(""),
    tourDestRef = useRef(""),
    holidayFromRef = useRef("Delhi"),
    holidayToRef = useRef("Goa");

  const popularDests = [
    { name: "Mumbai", code: "BOM" },
    { name: "Delhi", code: "DEL" },
    { name: "Bangalore", code: "BLR" },
    { name: "Goa", code: "GOI" },
    { name: "Kolkata", code: "CCU" },
    { name: "Chennai", code: "MAA" },
    { name: "Hyderabad", code: "HYD" },
    { name: "Jaipur", code: "JAI" },
    { name: "Dubai", code: "DXB" },
    { name: "Singapore", code: "SIN" },
    { name: "Bangkok", code: "BKK" },
    { name: "London", code: "LHR" },
  ];

  const desktopTabs = [
    { id: "Hotels", icon: <Bed size={22} />, badge: null },
    { id: "Flights", icon: <Plane size={22} />, badge: null },
    { id: "Homestay & Villas", icon: <Building size={22} />, badge: null },
    { id: "Holiday Packages", icon: <Palmtree size={22} />, badge: null },
    // { id: "Trains", icon: <Bus size={22} />, badge: null },
    { id: "Bus", icon: <Bus size={22} />, badge: null },
    { id: "Cab", icon: <Car size={22} />, badge: null },
    { id: "Tour & Attraction", icon: <Umbrella size={22} />, badge: "new" },
    { id: "Visa", icon: <Globe size={22} />, badge: "new" },
    { id: "Cruise", icon: <Ship size={22} />, badge: null },
    { id: "Holiday Packages", icon: <Briefcase size={22} />, badge: null },
  ];

  /* date helpers */
  const getFuture = (d) => {
    const dt = new Date();
    dt.setDate(dt.getDate() + d);
    const D = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      M = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    return `${D[dt.getDay()]}, ${M[dt.getMonth()]} ${dt.getDate()}`;
  };
  const dates = Array.from({ length: 30 }, (_, i) => getFuture(i + 1));

  const openCal = (ctx, range = true) => {
    setCalCtx({ ctx, range });
    setTempStart(null);
    setTempEnd(null);
    setPickingEnd(false);
    setModal("calendar");
  };
  const applyCal = () => {
    const c = calCtx?.ctx;
    if (c === "hotels")
      setHotelsData((p) => ({
        ...p,
        checkIn: tempStart || p.checkIn,
        checkOut: tempEnd || p.checkOut,
      }));
    else if (c === "flights-dep")
      setFlightsData((p) => ({ ...p, departure: tempStart || p.departure }));
    else if (c === "flights-ret")
      setFlightsData((p) => ({ ...p, returnDate: tempStart || p.returnDate }));
    else if (c === "fh")
      setFlightHotelData((p) => ({
        ...p,
        departure: tempStart || p.departure,
        return: tempEnd || p.return,
      }));
    else if (c === "bus")
      setBusData((p) => ({
        ...p,
        departureDate: tempStart || p.departureDate,
      }));
    else if (c === "cab-pick")
      setCabData((p) => ({ ...p, pickupDate: tempStart || p.pickupDate }));
    else if (c === "cab-drop")
      setCabData((p) => ({ ...p, dropoffDate: tempStart || p.dropoffDate }));
    else if (c === "cruise")
      setCruiseData((p) => ({
        ...p,
        departureDate: tempStart || p.departureDate,
        returnDate: tempEnd || p.returnDate,
      }));
    else if (c === "tour")
      setTourData((p) => ({
        ...p,
        checkIn: tempStart || p.checkIn,
        checkOut: tempEnd || p.checkOut,
      }));
    else if (c === "holiday")
      setHolidayData((p) => ({
        ...p,
        departure: tempStart || p.departure,
        return: tempEnd || p.return,
      }));
    setModal(null);
  };
  const pickDate = (d) => {
    if (!calCtx?.range || !pickingEnd) {
      setTempStart(d);
      setTempEnd(null);
      setPickingEnd(!!calCtx?.range);
    } else {
      setTempEnd(d);
      setPickingEnd(false);
    }
  };

  const openGuests = (ctx, data) => {
    setGuestsCtx(ctx);
    setTempGuests({
      rooms: data.rooms || 1,
      adults: data.adults || 2,
      children: data.children || 0,
    });
    setModal("guests");
  };
  const applyGuests = () => {
    if (guestsCtx === "hotels" || guestsCtx === "homestay")
      setHotelsData((p) => ({ ...p, ...tempGuests }));
    else if (guestsCtx === "fh")
      setFlightHotelData((p) => ({ ...p, ...tempGuests }));
    else if (guestsCtx === "cruise")
      setCruiseData((p) => ({ ...p, ...tempGuests }));
    else if (guestsCtx === "holiday")
      setHolidayData((p) => ({ ...p, ...tempGuests }));
    setModal(null);
  };

  const goTo = (tab) => {
    const p = {
      Hotels: "/hotels",
      "Homestay & Villas": "/homestay",
      Flights: "/flights",
      "Flights + Hotel": "/hotels&Flights",
      Bus: "/bus",
      Cab: "/cab",
      "Holiday Packages": "/holiday",
      "Tour & Attraction": "/tours",
      Cruise: "/cruise",
    };
    navigate(p[tab] || "/", { state: { type: tab } });
  };

  /* Desktop Input */
  const DInput = ({
    label,
    defaultValue,
    onRef,
    placeholder,
    icon: Icon,
    list,
  }) => (
    <div className="flex flex-col justify-center px-4 border border-gray-300 rounded-lg focus-within:border-blue-500 bg-white h-[58px]">
      <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
        {label}
      </label>
      <div className="flex items-center">
        {Icon && (
          <Icon size={15} className="text-gray-400 mr-2 flex-shrink-0" />
        )}
        <input
          type="text"
          defaultValue={defaultValue}
          onInput={(e) => {
            if (onRef) onRef.current = e.target.value;
          }}
          placeholder={placeholder}
          list={list}
          autoComplete="off"
          className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
        />
      </div>
      {list && (
        <datalist id={list}>
          {popularDests.map((d, i) => (
            <option key={i} value={d.name}>
              {d.name} ({d.code})
            </option>
          ))}
        </datalist>
      )}
    </div>
  );

  /* ── Desktop Tab Renderers ── */
  const renderHotels = (isHomes = false) => (
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="relative flex-1">
        <div className="flex flex-col justify-center px-4 border border-gray-300 rounded-lg bg-white focus-within:border-blue-500 h-[58px]">
          <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
            Destination/Hotel Name
          </label>
          <div className="flex items-center">
            <MapPin size={15} className="text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              defaultValue={hotelsData.destination}
              onInput={(e) => {
                hotelsDestRef.current = e.target.value;
              }}
              placeholder="City, airport, landmark..."
              list="dest-l"
              autoComplete="off"
              className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
            />
            <datalist id="dest-l">
              {popularDests.map((d, i) => (
                <option key={i} value={d.name} />
              ))}
            </datalist>
          </div>
        </div>
      </div>
      <div className="flex flex-1 border border-gray-300 rounded-lg h-[58px]">
        <div
          className="flex-1 flex flex-col justify-center px-4 cursor-pointer hover:bg-gray-50 rounded-l-lg"
          onClick={() => openCal("hotels", true)}
        >
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            CHECK-IN
          </label>
          <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">
            {hotelsData.checkIn}
          </p>
        </div>
        {/* <div className="flex items-center px-2">
          <span className="text-[10px] text-gray-600 px-2 py-1 border border-gray-200 rounded-full bg-white whitespace-nowrap">
            1 night
          </span>
        </div> */}
        <div
          className="flex-1 flex flex-col justify-center px-4 border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
          onClick={() => openCal("hotels", true)}
        >
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            CHECK-OUT
          </label>
          <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">
            {hotelsData.checkOut}
          </p>
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openGuests(isHomes ? "homestay" : "hotels", hotelsData)}
      >
        <div className="flex flex-col justify-center px-4 border border-gray-300 rounded-lg hover:border-gray-400 bg-white h-[58px]">
          <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
            Rooms and Guests
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[#1a2b48] font-bold text-[15px]">
              {hotelsData.rooms} room, {hotelsData.adults} adults,{" "}
              {hotelsData.children} children
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      <button
        onClick={() => goTo(isHomes ? "Homestay & Villas" : "Hotels")}
        className="bg-blue-600 text-white px-8 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap h-[58px]"
      >
        <Search size={20} /> SEARCH
      </button>
    </div>
  );

  const renderFlights = () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 text-sm font-medium">
        {["Return", "One-way", "Multi-city"].map((t) => (
          <label key={t} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              checked={flightsData.tripType === t.toLowerCase()}
              onChange={() =>
                setFlightsData((p) => ({ ...p, tripType: t.toLowerCase() }))
              }
              className="w-4 h-4"
            />{" "}
            {t}
          </label>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        <div className="flex flex-1 gap-1 w-full">
          <div className="flex-1">
            <DInput
              label="From"
              defaultValue={flightsData.from}
              onRef={flightsFromRef}
              placeholder="City or airport"
              icon={Navigation}
              list="fl-from"
            />
          </div>
          <div className="flex items-center z-10 -mx-4">
            <button
              onClick={() => {
                const t = flightsFromRef.current;
                flightsFromRef.current = flightsToRef.current;
                flightsToRef.current = t;
                setFlightsData((p) => ({
                  ...p,
                  from: flightsFromRef.current,
                  to: flightsToRef.current,
                }));
              }}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
            >
              <ArrowLeftRight size={16} className="text-blue-500" />
            </button>
          </div>
          <div className="flex-1">
            <DInput
              label="To"
              defaultValue={flightsData.to}
              onRef={flightsToRef}
              placeholder="City or airport"
              icon={Navigation}
              list="fl-to"
            />
          </div>
        </div>
        <div
          className="flex-1 cursor-pointer"
          onClick={() => openCal("flights-dep", false)}
        >
          <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white">
            <label className="text-[11px] text-gray-500 font-medium uppercase">
              Departure - Return
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {flightsData.departure} — {flightsData.returnDate}
              </span>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div
          className="flex-1 cursor-pointer"
          onClick={() => setModal("class")}
        >
          <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white">
            <label className="text-[11px] text-gray-500 font-medium uppercase">
              Passengers
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {flightsData.travelers} adult · {flightsData.travelClass}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        <button
          onClick={() => goTo("Flights")}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 whitespace-nowrap"
        >
          SEARCH
        </button>
      </div>
    </div>
  );

  const renderFlightHotel = () => (
    <div className="flex flex-col lg:flex-row gap-2 items-stretch">
      <div className="flex flex-1 gap-1">
        <div className="flex-1">
          <DInput
            label="From"
            defaultValue={flightHotelData.from}
            onRef={flightHotelFromRef}
            placeholder="City or airport"
            icon={Navigation}
            list="fh-from"
          />
        </div>
        <div className="flex items-center z-10 -mx-4">
          <button
            onClick={() => {
              const t = flightHotelFromRef.current;
              flightHotelFromRef.current = flightHotelToRef.current;
              flightHotelToRef.current = t;
              setFlightHotelData((p) => ({
                ...p,
                from: flightHotelFromRef.current,
                to: flightHotelToRef.current,
              }));
            }}
            className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
          >
            <ArrowLeftRight size={16} className="text-blue-500" />
          </button>
        </div>
        <div className="flex-1">
          <DInput
            label="To"
            defaultValue={flightHotelData.to}
            onRef={flightHotelToRef}
            placeholder="City or airport"
            icon={Navigation}
            list="fh-to"
          />
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openCal("fh", true)}
      >
        <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white h-full justify-center">
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            Depart - Return
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[#1a2b48] font-bold text-[15px]">
              {flightHotelData.departure} — {flightHotelData.return}
            </span>
            <Calendar size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openGuests("fh", flightHotelData)}
      >
        <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white h-full justify-center">
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            Rooms & Guests
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[#1a2b48] font-bold text-[15px]">
              {flightHotelData.rooms} room, {flightHotelData.adults} adults
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      <button
        onClick={() => goTo("Flights + Hotel")}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
      >
        <Search size={20} /> Search
      </button>
    </div>
  );

  const renderBus = () => (
    <div className="flex flex-col lg:flex-row gap-2 items-center">
      <div className="flex flex-1 gap-1 w-full">
        <div className="flex-1">
          <DInput
            label="From"
            defaultValue={busData.from}
            onRef={busFromRef}
            placeholder="Departure city"
            icon={Bus}
            list="bus-from"
          />
        </div>
        <div className="flex items-center z-10 -mx-3">
          <button
            onClick={() => {
              const t = busFromRef.current;
              busFromRef.current = busToRef.current;
              busToRef.current = t;
              setBusData((p) => ({
                ...p,
                from: busFromRef.current,
                to: busToRef.current,
              }));
            }}
            className="p-1.5 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
          >
            <ArrowLeftRight size={14} className="text-blue-400" />
          </button>
        </div>
        <div className="flex-1">
          <DInput
            label="To"
            defaultValue={busData.to}
            onRef={busToRef}
            placeholder="Arrival city"
            icon={Bus}
            list="bus-to"
          />
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openCal("bus", false)}
      >
        <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white">
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            DEPARTURE DATE
          </label>
          <div className="flex items-center justify-between">
            <p className="font-bold text-[#1a2b48] whitespace-nowrap">
              {busData.departureDate}
            </p>
            <Calendar size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
      <button
        onClick={() => goTo("Bus")}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
      >
        <Search size={20} /> Search
      </button>
    </div>
  );

  const renderCab = () => (
    <div className="space-y-3">
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        <div className="flex-1">
          <DInput
            label="Pick-up location"
            defaultValue={cabData.pickup}
            onRef={cabPickupRef}
            placeholder="Airport, city, or address"
            icon={MapPin}
            list="cab-list"
          />
        </div>
        <div className="flex flex-1 border border-gray-300 rounded-lg">
          <div
            className="flex-1 px-4 py-2 border-r border-gray-100 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => openCal("cab-pick", false)}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">
              PICK-UP DATE
            </label>
            <p className="font-bold text-[15px] text-[#1a2b48]">
              {cabData.pickupDate}
            </p>
          </div>
          <div
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => openCal("cab-drop", false)}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">
              DROP-OFF DATE
            </label>
            <p className="font-bold text-[15px] text-[#1a2b48]">
              {cabData.dropoffDate}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg bg-white h-full justify-center">
            <label className="text-[11px] text-gray-500 font-medium uppercase">
              Driving licence country
            </label>
            <select
              value={cabData.licenseCountry}
              onChange={(e) =>
                setCabData((p) => ({ ...p, licenseCountry: e.target.value }))
              }
              className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent cursor-pointer"
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => goTo("Cab")}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
        >
          <Search size={20} /> Search
        </button>
      </div>
      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          checked={cabData.differentLocation}
          onChange={(e) =>
            setCabData((p) => ({ ...p, differentLocation: e.target.checked }))
          }
          className="h-4 w-4"
        />
        Drop off at a different location
      </label>
    </div>
  );

  const renderCruise = () => (
    <div className="flex flex-col lg:flex-row gap-2 items-stretch">
      <div className="flex-1">
        <DInput
          label="Cruise Destination"
          defaultValue={cruiseData.destination}
          onRef={cruiseDestRef}
          placeholder="Enter cruise destination"
          icon={Ship}
        />
      </div>
      <div className="flex flex-1 border border-gray-300 rounded-lg">
        <div
          className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
          onClick={() => openCal("cruise", true)}
        >
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            DEPARTURE
          </label>
          <p className="font-bold text-[15px] text-[#1a2b48]">
            {cruiseData.departureDate}
          </p>
        </div>
        <div
          className="flex-1 px-4 py-2 border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
          onClick={() => openCal("cruise", true)}
        >
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            RETURN
          </label>
          <p className="font-bold text-[15px] text-[#1a2b48]">
            {cruiseData.returnDate}
          </p>
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openGuests("cruise", cruiseData)}
      >
        <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white h-full justify-center">
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            Cabins & Guests
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[#1a2b48] font-bold text-[15px]">
              {cruiseData.rooms} cabin, {cruiseData.adults} adults
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      <button
        onClick={() => goTo("Cruise")}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
      >
        <Search size={20} /> SEARCH
      </button>
    </div>
  );

  const renderTour = () => (
    <div className="flex flex-col lg:flex-row gap-2 items-stretch">
      <div className="flex-1">
        <DInput
          label="Tour Destination"
          defaultValue={tourData.destination}
          onRef={tourDestRef}
          placeholder="Enter tour destination"
          icon={Umbrella}
        />
      </div>
      <div className="flex flex-1 border border-gray-300 rounded-lg">
        <div
          className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
          onClick={() => openCal("tour", true)}
        >
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            START DATE
          </label>
          <p className="font-bold text-[15px] text-[#1a2b48]">
            {tourData.checkIn}
          </p>
        </div>
        <div
          className="flex-1 px-4 py-2 border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
          onClick={() => openCal("tour", true)}
        >
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            END DATE
          </label>
          <p className="font-bold text-[15px] text-[#1a2b48]">
            {tourData.checkOut}
          </p>
        </div>
      </div>
      <button
        onClick={() => goTo("Tour & Attraction")}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
      >
        <Search size={20} /> SEARCH
      </button>
    </div>
  );

  const renderHoliday = () => (
    <div className="flex flex-col lg:flex-row gap-2 items-stretch">
      <div className="flex flex-1 gap-1">
        <div className="flex-1">
          <DInput
            label="From"
            defaultValue={holidayData.from}
            onRef={holidayFromRef}
            placeholder="Departure city"
            icon={Navigation}
            list="hol-from"
          />
        </div>
        <div className="flex items-center z-10 -mx-4">
          <button
            onClick={() => {
              const t = holidayFromRef.current;
              holidayFromRef.current = holidayToRef.current;
              holidayToRef.current = t;
              setHolidayData((p) => ({
                ...p,
                from: holidayFromRef.current,
                to: holidayToRef.current,
              }));
            }}
            className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
          >
            <ArrowLeftRight size={16} className="text-blue-500" />
          </button>
        </div>
        <div className="flex-1">
          <DInput
            label="To"
            defaultValue={holidayData.to}
            onRef={holidayToRef}
            placeholder="Destination"
            icon={Palmtree}
            list="hol-to"
          />
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openCal("holiday", true)}
      >
        <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white h-full justify-center">
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            Depart - Return
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[#1a2b48] font-bold text-[15px]">
              {holidayData.departure} — {holidayData.return}
            </span>
            <Calendar size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => openGuests("holiday", holidayData)}
      >
        <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 bg-white h-full justify-center">
          <label className="text-[11px] text-gray-500 font-medium uppercase">
            Rooms & Guests
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[#1a2b48] font-bold text-[15px]">
              {holidayData.rooms} room, {holidayData.adults} adults
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      <button
        onClick={() => goTo("Holiday Packages")}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
      >
        <Search size={20} /> Search
      </button>
    </div>
  );

  /* ── Mobile Search Panels ── */
  const pinkBtn = {
    background: `linear-gradient(135deg,${BRAND},${BRAND_DARK})`,
  };
  const renderMobileSearch = () => {
    if (!activeService) return null;
    if (activeService === "hotels" || activeService === "homestay")
      return (
        <div className="space-y-2 mt-3">
          <div className="flex items-center gap-2 px-3 py-2.5 border rounded-xl bg-gray-50">
            <MapPin size={16} className="text-gray-400 flex-shrink-0" />
            <input
              defaultValue={hotelsData.destination}
              onInput={(e) => {
                hotelsDestRef.current = e.target.value;
              }}
              placeholder="City, hotel or landmark"
              className="flex-1 text-sm font-medium outline-none bg-transparent placeholder:text-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => openCal("hotels", true)}
              className="flex flex-col px-3 py-2 border rounded-xl bg-gray-50 text-left"
            >
              <span className="text-[10px] text-gray-500 uppercase">
                Check-in
              </span>
              <span className="text-sm font-bold text-gray-900">
                {hotelsData.checkIn}
              </span>
            </button>
            <button
              onClick={() => openCal("hotels", true)}
              className="flex flex-col px-3 py-2 border rounded-xl bg-gray-50 text-left"
            >
              <span className="text-[10px] text-gray-500 uppercase">
                Check-out
              </span>
              <span className="text-sm font-bold text-gray-900">
                {hotelsData.checkOut}
              </span>
            </button>
          </div>
          <button
            onClick={() => openGuests(activeService, hotelsData)}
            className="w-full flex items-center justify-between px-3 py-2.5 border rounded-xl bg-gray-50"
          >
            <span className="text-sm font-medium text-gray-700">
              {hotelsData.rooms} Room · {hotelsData.adults} Adults ·{" "}
              {hotelsData.children} Children
            </span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          <button
            onClick={() => navigate("/hotels")}
            className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2"
            style={pinkBtn}
          >
            <Search size={16} /> Search Hotels
          </button>
        </div>
      );
    if (activeService === "flights")
      return (
        <div className="space-y-2 mt-3">
          <div className="flex gap-3 text-xs font-semibold">
            {["return", "one-way", "multi-city"].map((t) => (
              <label
                key={t}
                className="flex items-center gap-1.5 cursor-pointer"
              >
                <input
                  type="radio"
                  name="mob-trip"
                  checked={flightsData.tripType === t}
                  onChange={() =>
                    setFlightsData((p) => ({ ...p, tripType: t }))
                  }
                  className="w-3.5 h-3.5"
                />
                <span className="capitalize">{t.replace("-", " ")}</span>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 px-3 py-2.5 border rounded-xl bg-gray-50">
              <Navigation size={14} className="text-gray-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-500 uppercase">From</p>
                <input
                  defaultValue={flightsData.from}
                  onInput={(e) => {
                    flightsFromRef.current = e.target.value;
                  }}
                  className="text-sm font-bold outline-none bg-transparent w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 border rounded-xl bg-gray-50">
              <Navigation size={14} className="text-gray-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-500 uppercase">To</p>
                <input
                  defaultValue={flightsData.to}
                  onInput={(e) => {
                    flightsToRef.current = e.target.value;
                  }}
                  className="text-sm font-bold outline-none bg-transparent w-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => openCal("flights-dep", false)}
              className="flex flex-col px-3 py-2 border rounded-xl bg-gray-50 text-left"
            >
              <span className="text-[10px] text-gray-500 uppercase">
                Departure
              </span>
              <span className="text-sm font-bold text-gray-900">
                {flightsData.departure}
              </span>
            </button>
            <button
              onClick={() => openCal("flights-ret", false)}
              className="flex flex-col px-3 py-2 border rounded-xl bg-gray-50 text-left"
            >
              <span className="text-[10px] text-gray-500 uppercase">
                Return
              </span>
              <span className="text-sm font-bold text-gray-900">
                {flightsData.returnDate}
              </span>
            </button>
          </div>
          <button
            onClick={() => setModal("class")}
            className="w-full flex items-center justify-between px-3 py-2.5 border rounded-xl bg-gray-50"
          >
            <span className="text-sm font-medium text-gray-700">
              {flightsData.travelers} Adult · {flightsData.travelClass}
            </span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          <button
            onClick={() => navigate("/flights")}
            className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,#1565c0,#1e40af)" }}
          >
            <Search size={16} /> Search Flights
          </button>
        </div>
      );
    if (activeService === "bus")
      return (
        <div className="space-y-2 mt-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 px-3 py-2.5 border rounded-xl bg-gray-50">
              <Bus size={14} className="text-gray-400 flex-shrink-0" />
              <input
                defaultValue={busData.from}
                onInput={(e) => {
                  busFromRef.current = e.target.value;
                }}
                placeholder="From"
                className="text-sm font-bold outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 border rounded-xl bg-gray-50">
              <Bus size={14} className="text-gray-400 flex-shrink-0" />
              <input
                defaultValue={busData.to}
                onInput={(e) => {
                  busToRef.current = e.target.value;
                }}
                placeholder="To"
                className="text-sm font-bold outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
              />
            </div>
          </div>
          <button
            onClick={() => openCal("bus", false)}
            className="w-full flex items-center justify-between px-3 py-2.5 border rounded-xl bg-gray-50"
          >
            <div className="text-left">
              <span className="text-[10px] text-gray-500 uppercase block">
                Departure Date
              </span>
              <span className="text-sm font-bold text-gray-900">
                {busData.departureDate}
              </span>
            </div>
            <Calendar size={14} className="text-gray-400" />
          </button>
          <button
            onClick={() => navigate("/bus")}
            className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,#15803d,#166534)" }}
          >
            <Search size={16} /> Search Buses
          </button>
        </div>
      );
    return (
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 px-3 py-2.5 border rounded-xl bg-gray-50">
          <MapPin size={16} className="text-gray-400 flex-shrink-0" />
          <input
            placeholder="Enter destination..."
            className="flex-1 text-sm font-medium outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-xl font-bold text-white text-sm"
          style={pinkBtn}
        >
          Search
        </button>
      </div>
    );
  };

  /* ── Grid Row ── */
  const GridRow = ({ items }) => (
    <div className="grid grid-cols-4 gap-2 px-3 py-3">
      {items.map((item) => (
        <ServiceTile
          key={item.id}
          item={item}
          active={activeService === item.id}
          onClick={() =>
            setActiveService(activeService === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );

  /* ── MODALS ── */
  const CalModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50">
      <div className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="px-5 py-4 border-b flex justify-between items-center">
          <h2 className="text-base font-bold text-gray-900">Select Date</h2>
          <button
            onClick={() => setModal(null)}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-2">
          {dates.map((d, i) => {
            const iS = tempStart === d,
              iE = tempEnd === d,
              si = dates.indexOf(tempStart),
              ei = dates.indexOf(tempEnd),
              inR = si !== -1 && ei !== -1 && i > si && i < ei;
            return (
              <button
                key={i}
                onClick={() => pickDate(d)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${iS ? "border-pink-500 bg-pink-50 text-pink-700" : iE ? "border-green-500 bg-green-50 text-green-700" : inR ? "border-pink-200 bg-pink-50/50" : "border-gray-200 hover:border-pink-300"}`}
              >
                <div className="flex justify-between items-center">
                  <span>{d}</span>
                  {(iS || iE) && <Check size={14} />}
                </div>
              </button>
            );
          })}
        </div>
        <div className="px-5 py-4 border-t">
          <button
            onClick={applyCal}
            disabled={!tempStart}
            className="w-full py-3 rounded-xl font-bold text-white text-sm disabled:opacity-40"
            style={pinkBtn}
          >
            {tempStart
              ? `Confirm${tempEnd ? ` — ${tempStart} → ${tempEnd}` : ` ${tempStart}`}`
              : "Select a date"}
          </button>
        </div>
      </div>
    </div>
  );

  const GModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50">
      <div className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="px-5 py-4 border-b flex justify-between items-center">
          <h2 className="text-base font-bold text-gray-900">Rooms & Guests</h2>
          <button
            onClick={() => setModal(null)}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-5 py-4">
          <Counter
            label="Rooms"
            sub="Max 9 rooms"
            val={tempGuests.rooms}
            min={1}
            max={9}
            onChange={(v) => setTempGuests((p) => ({ ...p, rooms: v }))}
          />
          <Counter
            label="Adults"
            sub="Age 18+"
            val={tempGuests.adults}
            min={1}
            max={30}
            onChange={(v) => setTempGuests((p) => ({ ...p, adults: v }))}
          />
          <Counter
            label="Children"
            sub="Age 0-17"
            val={tempGuests.children}
            min={0}
            max={10}
            onChange={(v) => setTempGuests((p) => ({ ...p, children: v }))}
          />
        </div>
        <div className="px-5 py-4 border-t">
          <button
            onClick={applyGuests}
            className="w-full py-3 rounded-xl font-bold text-white text-sm"
            style={pinkBtn}
          >
            Apply · {tempGuests.rooms} room, {tempGuests.adults} adults,{" "}
            {tempGuests.children} children
          </button>
        </div>
      </div>
    </div>
  );

  const CModal = () => {
    const [tc, setTc] = useState(flightsData.travelClass),
      [tt, setTt] = useState(flightsData.travelers);
    return (
      <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50">
        <div className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">
              Travelers & Class
            </h2>
            <button
              onClick={() => setModal(null)}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X size={18} />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 px-5 py-4">
            <Counter
              label="Travelers"
              sub="Max 9"
              val={tt}
              min={1}
              max={9}
              onChange={setTt}
            />
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">Class</p>
              <div className="grid grid-cols-2 gap-2">
                {["Economy", "Premium", "Business", "First"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setTc(cls)}
                    className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${tc === cls ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 text-gray-700 hover:border-blue-300"}`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="px-5 py-4 border-t">
            <button
              onClick={() => {
                setFlightsData((p) => ({
                  ...p,
                  travelClass: tc,
                  travelers: tt,
                }));
                setModal(null);
              }}
              className="w-full py-3 rounded-xl font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg,#1565c0,#1e40af)" }}
            >
              Apply · {tt} traveler{tt > 1 ? "s" : ""}, {tc}
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ════════════════════════════════════
     RENDER
  ════════════════════════════════════ */
  return (
    <>
      {/* ══ DESKTOP ══ */}
      <div
        className="hidden md:block w-full min-h-[560px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1608332311307-2d533ae0fd2d?q=80&w=3174&auto=format&fit=crop')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center pt-6 px-3">
          {/* ── Tab Bar ── */}
          <div className="w-full max-w-[1050px] mt-6 mx-auto">
            <div
              className="bg-white rounded-2xl px-4 py-3 flex justify-between items-center shadow-md border border-gray-100 overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {[
                { id: "Hotels", label: "Hotels", icon: "🏨", badge: null },
                { id: "Flights", label: "Flights", icon: "✈", badge: null },
                {
                  id: "Homestay & Villas",
                  label: "Homestays &\nVillas",
                  icon: "🏡",
                  badge: null,
                },
                {
                  id: "Holiday Packages",
                  label: "Holiday\nPackages",
                  icon: "🧳",
                  badge: null,
                },
                // { id: "Trains", label: "Trains", icon: "🚄", badge: null },
                { id: "Bus", label: "Buses", icon: "🚌", badge: null },
                { id: "Cab", label: "Cabs", icon: "🚕", badge: null },
                {
                  id: "Tour & Attraction",
                  label: "Tours &\nAttractions",
                  icon: "🎡",
                  badge: "new",
                },
                { id: "Visa", label: "Visa", icon: "📘", badge: null },
                { id: "Cruise", label: "Cruise", icon: "🚢", badge: "new" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex flex-col items-center justify-center flex-1 min-w-[90px] py-2 group transition-all"
                  style={{ minWidth: 72 }}
                >
                  {/* "new" badge */}
                  {tab.badge && (
                    <span
                      className="absolute -top-0 left-1/2 -translate-x-1/2 text-[9px] font-black text-white px-1.5 py-0.5 rounded-full z-10"
                      style={{ background: "#ce118a", letterSpacing: "0.03em" }}
                    >
                      new
                    </span>
                  )}

                  {/* Icon circle */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full mb-1 transition-all
              ${
                activeTab === tab.id
                  ? "bg-blue-50 ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 group-hover:bg-blue-50"
              }`}
                  >
                    <span style={{ fontSize: 22 }}>{tab.icon}</span>
                  </div>

                  {/* Label */}
                  <span
                    className={`text-[11px] mt-1 font-semibold text-center leading-tight whitespace-pre-line transition-colors
              ${activeTab === tab.id ? "text-[#008cff]" : "text-gray-600 group-hover:text-blue-500"}`}
                  >
                    {tab.label}
                  </span>

                  {/* Active underline */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-[#008cff]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Search Card ── */}
          <div className="w-full max-w-[1100px] mx-auto bg-white shadow-xl rounded-2xl px-6 pt-6 pb-8 -mt-3 border border-gray-100">
            {/* ── FLIGHTS ── */}
            {activeTab === "Flights" && (
              <div className="space-y-4">
                {/* Trip type + subtitle */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-5 flex-wrap">
                    {["One-way", "Return", "Multi-city"].map((t) => {
                      const val = t
                        .toLowerCase()
                        .replace("-", "")
                        .replace(" ", "-");
                      const match =
                        val === "one-way"
                          ? "one-way"
                          : val === "return"
                            ? "return"
                            : "multi-city";
                      return (
                        <label
                          key={t}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                      ${flightsData.tripType === match ? "border-[#008cff] bg-[#008cff]" : "border-gray-400 group-hover:border-blue-400"}`}
                          >
                            {flightsData.tripType === match && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className={`text-[13px] font-semibold ${flightsData.tripType === match ? "text-[#008cff]" : "text-gray-700"}`}
                          >
                            {t}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <span className="text-[13px] text-gray-500 font-medium">
                    Book International and Domestic Flights
                  </span>
                </div>

                {/* Main row */}
                <div className="flex flex-col md:flex-row border border-gray-300 rounded-xl overflow-hidden relative divide-y md:divide-y-0 md:divide-x">
                  {/* From */}
                  <div className="flex-[1.4] px-4 py-3 md:px-5 md:py-4 border-gray-300 min-w-0">
                    <p className="text-xs text-gray-500 font-semibold mb-0.5 uppercase tracking-wide">
                      From
                    </p>
                    <input
                      type="text"
                      defaultValue={flightsData.from}
                      onInput={(e) => {
                        flightsFromRef.current = e.target.value;
                      }}
                      list="fl-from"
                      autoComplete="off"
                      className="text-[22px] md:text-[28px]font-black text-gray-900 outline-none w-full bg-transparent leading-tight"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    />
                    <p className="text-xs text-gray-400 mt-0.5 truncate">
                      DEL, Indira Gandhi International Airport…
                    </p>
                    <datalist id="fl-from">
                      {popularDests.map((d, i) => (
                        <option key={i} value={d.name} />
                      ))}
                    </datalist>
                  </div>

                  {/* Swap button — overlapping */}
                  <div className="hidden md:flex items-center justify-center relative z-20 -mx-4">
                    <button
                      onClick={() => {
                        const t = flightsFromRef.current;
                        flightsFromRef.current = flightsToRef.current;
                        flightsToRef.current = t;
                        setFlightsData((p) => ({
                          ...p,
                          from: flightsFromRef.current,
                          to: flightsToRef.current,
                        }));
                      }}
                      className="w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center hover:shadow-lg hover:border-blue-400 transition-all"
                    >
                      <ArrowLeftRight size={16} className="text-blue-500" />
                    </button>
                  </div>

                  {/* To */}
                  <div className="flex-[1.4] px-4 py-3 md:px-5 border-gray-300 min-w-0">
                    <p className="text-xs text-gray-500 font-semibold mb-0.5 uppercase tracking-wide">
                      To
                    </p>
                    <input
                      type="text"
                      defaultValue={flightsData.to}
                      onInput={(e) => {
                        flightsToRef.current = e.target.value;
                      }}
                      list="fl-to"
                      autoComplete="off"
                      className="text-[22px] md:text-[28px] font-black text-gray-900 outline-none w-full bg-transparent leading-tight"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    />
                    <p className="text-xs text-gray-400 mt-0.5 truncate">
                      BOM, Chhatrapati Shivaji International…
                    </p>
                    <datalist id="fl-to">
                      {popularDests.map((d, i) => (
                        <option key={i} value={d.name} />
                      ))}
                    </datalist>
                  </div>

                  {/* Departure */}
                  <div
                    className="flex-1 px-4 py-3 md:px-5 md:py-4 border-gray-300 cursor-pointer hover:bg-blue-50/40 transition-colors"
                    onClick={() => openCal("flights-dep", false)}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        Departure
                      </p>
                      <ChevronDown size={12} className="text-gray-400" />
                    </div>
                    <p
                      className="text-[26px] font-black text-gray-900 leading-tight"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {flightsData.departure.split(", ")[1]?.split(" ")[1] ||
                        "28"}{" "}
                      <span className="text-[18px]">
                        {flightsData.departure.split(", ")[1]?.split(" ")[0] ||
                          "Mar'26"}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      {flightsData.departure.split(", ")[0] || "Saturday"}
                    </p>
                  </div>

                  {/* Return */}
                  <div
                    className="flex-1 px-4 py-3 md:px-5 md:py-4 border-gray-300 cursor-pointer hover:bg-blue-50/40 transition-colors"
                    onClick={() => openCal("flights-ret", false)}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        Return
                      </p>
                      <ChevronDown size={12} className="text-gray-400" />
                    </div>
                    {flightsData.returnDate ? (
                      <>
                        <p
                          className="text-[26px] font-black text-gray-900 leading-tight"
                          style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                          }}
                        >
                          {flightsData.returnDate
                            .split(", ")[1]
                            ?.split(" ")[1] || "—"}
                        </p>
                        <p className="text-xs text-gray-400">
                          {flightsData.returnDate.split(", ")[0]}
                        </p>
                      </>
                    ) : (
                      <p className="text-[13px] text-gray-400 mt-1 leading-tight">
                        Tap to add a return
                        <br />
                        date for bigger
                        <br />
                        discounts
                      </p>
                    )}
                  </div>

                  {/* Travellers & Class */}
                  <div
                    className="flex-1 px-4 py-3 md:px-5 md:py-4 cursor-pointer hover:bg-blue-50/40 transition-colors"
                    onClick={() => setModal("class")}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        Travellers &amp; Class
                      </p>
                      <ChevronDown size={12} className="text-gray-400" />
                    </div>
                    <p
                      className="text-[26px] font-black text-gray-900 leading-tight"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {flightsData.travelers}{" "}
                      <span className="text-[16px] font-bold">
                        Traveller{flightsData.travelers !== 1 ? "s" : ""}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      {flightsData.travelClass}
                    </p>
                  </div>
                </div>

                {/* Special Fares */}
                <div className="flex items-center gap-3 flex-wrap mt-2">
                  <div>
                    <p className="text-[11px] font-black text-gray-800 uppercase tracking-wide leading-none">
                      SPECIAL
                    </p>
                    <p className="text-[11px] font-black text-gray-800 uppercase tracking-wide leading-none">
                      FARES
                    </p>
                  </div>
                  {[
                    { label: "Regular", sub: "Regular fares", active: true },
                    {
                      label: "Student",
                      sub: "Extra discounts/baggage",
                      active: false,
                    },
                    {
                      label: "Armed Forces",
                      sub: "Up to ₹ 600 off",
                      active: false,
                    },
                    {
                      label: "Have a GST number?",
                      sub: "Upto 10% Extra Savings!",
                      active: false,
                      badge: "new",
                    },
                    {
                      label: "Senior Citizen",
                      sub: "Up to ₹ 600 off",
                      active: false,
                    },
                    {
                      label: "Doctor and Nurses",
                      sub: "Up to ₹ 600 off",
                      active: false,
                    },
                  ].map((f, i) => (
                    <button
                      key={i}
                      className={`relative flex flex-col items-start px-4 py-2 rounded-lg border-2 transition-all text-left
                  ${
                    f.active
                      ? "border-[#008cff] bg-white shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                    >
                      {f.badge && (
                        <span
                          className="absolute -top-2 right-2 text-[8px] font-black text-white px-1.5 py-0.5 rounded-full"
                          style={{ background: "#ce118a" }}
                        >
                          new
                        </span>
                      )}
                      <span
                        className={`text-[12px] font-bold ${f.active ? "text-[#008cff]" : "text-gray-800"}`}
                      >
                        {f.label}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium leading-tight">
                        {f.sub}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick links + Search */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
                  <div className="flex items-center gap-3">
                    {[
                      { label: "Flight Tracker", icon: "📡" },
                      { label: "Shop Duty Free", icon: "🛍", badge: "10% off" },
                    ].map((q, i) => (
                      <button
                        key={i}
                        className="relative flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg bg-white hover:border-gray-300 hover:shadow-sm transition-all"
                      >
                        {q.badge && (
                          <span className="absolute -top-2.5 left-2 text-[8px] font-black text-[#008cff] bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded-full">
                            {q.badge}
                          </span>
                        )}
                        <span style={{ fontSize: 16 }}>{q.icon}</span>
                        <span className="text-[13px] font-semibold text-gray-700">
                          {q.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  {/* SEARCH button */}
                  <button
                    onClick={() => goTo("Flights")}
                    className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 px-12 md:px-14 py-2.5 md:py-3 rounded-full text-white font-semibold text-base tracking-widest shadow-lg hover:shadow-xl active:scale-95 transition-all"
                    style={{
                      background: "linear-gradient(90deg,#53b2fe,#065af3)",
                      letterSpacing: "0.12em",
                      fontSize: 18,
                    }}
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            )}

            {/* ── HOTELS / HOMESTAY ── */}
            {(activeTab === "Hotels" || activeTab === "Homestay & Villas") &&
              renderHotels(activeTab === "Homestay & Villas")}

            {/* ── FLIGHTS + HOTEL ── */}
            {activeTab === "Flights + Hotel" && renderFlightHotel()}

            {/* ── BUS ── */}
            {activeTab === "Bus" && renderBus()}

            {/* ── CAB ── */}
            {activeTab === "Cab" && renderCab()}

            {/* ── CRUISE ── */}
            {activeTab === "Cruise" && renderCruise()}

            {/* ── TOUR ── */}
            {activeTab === "Tour & Attraction" && renderTour()}

            {/* ── HOLIDAY ── */}
            {activeTab === "Holiday Packages" && renderHoliday()}

            {/* ── VISA / FOREX / INSURANCE fallback ── */}
            {["Visa", "Forex", "Insurance"].includes(activeTab) && (
              <div className="flex items-center justify-center py-10 text-gray-400 text-sm font-semibold">
                {activeTab} booking — coming soon
              </div>
            )}
          </div>
          {/* /Search Card */}
        </div>
        {/* /relative z-10 */}
      </div>

      {/* ══ MOBILE ══ */}
      <div
        className="md:hidden w-full bg-[#f0f4f8] min-h-screen"
        style={{ fontFamily: "'Segoe UI',system-ui,sans-serif" }}
      >
        {/* AI Banner */}
        <div
          className="mx-3 mt-3 mb-3 rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#e0e7ff 0%,#fce7f3 50%,#dbeafe 100%)",
          }}
        >
          <div className="px-4 pt-3 pb-3">
            <p className="text-[11px] font-bold text-gray-600 flex items-center gap-1.5 mb-2">
              <span className="text-yellow-500"></span> AI Powered Smart Search
            </p>
            <div className="bg-white rounded-xl flex items-center gap-3 px-3 py-2.5 shadow-sm">
              <input
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="Plan your trip? Just ask Birdy."
                className="flex-1 text-sm text-gray-500 outline-none placeholder:text-gray-400"
              />
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg,${BRAND},#7c3aed)`,
                }}
              >
                <ChevronRight size={14} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid Card */}
        <div
          className="mx-1 mb-5 overflow-hidden"
          // style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}
        >
          {/* Active search panel */}
          {activeService && (
            <div className="px-4 pb-3 border-b border-gray-100 bg-blue-50/30">
              <div className="flex items-center justify-between pt-3 pb-1">
                <p className="text-sm font-bold text-gray-800 capitalize">
                  {activeService.replace("-", " + ")}
                </p>
                <button
                  onClick={() => setActiveService(null)}
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  <X size={15} className="text-gray-500" />
                </button>
              </div>
              {renderMobileSearch()}
            </div>
          )}

          {/* Row 1 — white bg, larger cards */}
          {/* <div className="grid grid-cols-4 gap-2 p-2 ">
            {MOB_ROW1.map((item) => (
              <ServiceTile
                row={true}
                key={item.id}
                item={item}
                active={activeService === item.id}
                large
                onClick={() =>
                  setActiveService(activeService === item.id ? null : item.id)
                }
              />
            ))}
          </div> */}

          {/* ================= MOBILE SERVICES ================= */}
<div className="md:hidden bg-white rounded-2xl p-3 shadow-sm">

  {/* ROW 1 */}
  <div className="grid grid-cols-4 gap-2">
    {MOB_ROW1.map((item) => (
      <ServiceTile key={item.id} item={item} />
    ))}
  </div>

  {/* ROW 2 */}
  <div className="grid grid-cols-4 gap-2 mt-3">
    {MOB_ROW2.map((item) => (
      <ServiceTile key={item.id} item={item} />
    ))}
  </div>

  {/* EXTRA ROWS (HIDDEN INITIALLY) */}
  {expanded && (
    <>
      <div className="grid grid-cols-4 gap-2 mt-3">
        {MOB_ROW3.map((item) => (
          <ServiceTile key={item.id} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mt-3">
        {MOB_ROW4.map((item) => (
          <ServiceTile key={item.id} item={item} />
        ))}
      </div>
    </>
  )}

  {/* VIEW ALL BUTTON */}
  <div className="flex justify-center mt-3">
    <button
      onClick={() => setExpanded(!expanded)}
      className="text-sm font-semibold text-blue-600"
    >
      {expanded ? "View Less ▲" : "View All ▼"}
    </button>
  </div>

</div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 shadow-sm mb-3 p-2 mx-2 rounded-2xl bg-white gap-2 ">
            {MOB_ROW2.map((item) => (
              <ServiceTile
                key={item.id}
                item={item}
                active={activeService === item.id}
                onClick={() =>
                  setActiveService(activeService === item.id ? null : item.id)
                }
              />
            ))}
          </div>

          {/* Row 3 */}
          <div className="mx-2 mb-3 bg-white rounded-2xl p-2 shadow-sm">
            <div className="grid grid-cols-4 gap-2 bg-white">
              {MOB_ROW3.map((item) => (
                <ServiceTile
                  key={item.id}
                  item={item}
                  active={activeService === item.id}
                  onClick={() =>
                    setActiveService(activeService === item.id ? null : item.id)
                  }
                />
              ))}
            </div>

            {expanded && (
              <div className="grid grid-cols-4 gap-2">
                {MOB_ROW4.map((item) => (
                  <ServiceTile
                    key={item.id}
                    item={item}
                    active={activeService === item.id}
                    onClick={() =>
                      setActiveService(
                        activeService === item.id ? null : item.id,
                      )
                    }
                  />
                ))}
              </div>
            )}
            <div className="flex items-center justify-center my-2">
              <ChevronDown
                onClick={() => setExpanded((p) => !p)}
                size={20}
                className={`transition-transform cursor-po duration-200 ${expanded ? "rotate-180" : ""}`}
              />
            </div>
          </div>

          {/* Expand toggle */}
          {/* <div className="bg-white">
            <button
              onClick={() => setExpanded((p) => !p)}
              className="w-full py-3 flex items-center justify-center text-gray-400 hover:bg-gray-50"
            >
             utton>
          </div> */}
        </div>

        {/* Offers */}
         {/* <div
          className="mx-3 mb-3 bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}
        >
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <h2 className="text-base font-bold text-gray-900">Offers</h2>
            <button
              className="text-xs font-semibold flex items-center gap-0.5"
              style={{ color: BLUE }}
            >
              View All <ChevronRight size={12} />
            </button>
          </div>
          <div
            className="flex gap-2 px-3 pb-3 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {OFFER_TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveOfferTab(t)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${activeOfferTab === t ? "text-blue-700 bg-blue-50 border-blue-300" : "text-gray-500 bg-gray-50 border-transparent"}`}
              >
                {t}
              </button>
            ))}
          </div>
     <div
            className="flex gap-3 px-3 pb-4 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {OFFER_CARDS.map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 rounded-xl overflow-hidden border border-gray-100"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
              >
                <div
                  className="h-20 flex items-center justify-center text-4xl"
                  style={{ backgroundColor: c.bg }}
                >
                  {c.em}
                </div>
                <div className="p-2.5">
                  <span
                    className="text-[9px] font-black tracking-wider px-1.5 py-0.5 rounded text-white"
                    style={{ backgroundColor: c.accent }}
                  >
                    {c.tag}
                  </span>
                  <p className="text-xs font-bold text-gray-900 mt-1.5 leading-tight">
                    {c.title}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>  */}


        {/* Bottom Nav */} 
        {/* //should be add into footer  */}

        <RecentSearches />
         <div
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden"
          style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.08)" }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-6">
            <button
              className="w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
            >
              <Sparkles size={20} className="text-white" />
            </button>
          </div>
          <div className="flex items-center justify-around px-2 py-2">
            {[
              { icon: <Home size={22} />, label: "Home", active: true },
              { icon: <Briefcase size={22} />, label: "Trips", active: false },
              { icon: null, label: "", active: false },
              { icon: <Tag size={22} />, label: "Gift Card", active: false },
              { icon: <User size={22} />, label: "Account", active: false },
            ].map((item, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-0.5 py-1"
                style={{ minWidth: 52 }}
              >
                {item.icon && (
                  <span style={{ color: item.active ? BLUE : "#9ca3af" }}>
                    {item.icon}
                  </span>
                )}
                {item.label && (
                  <span
                    className={`text-[10px] font-semibold ${item.active ? "text-blue-600" : "text-gray-400"}`}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div> 
      </div>

      {/* ── MODALS ── */}
      {modal === "calendar" && <CalModal />}
      {modal === "guests" && <GModal />}
      {modal === "class" && <CModal />}
    </>
  );
};

export default Hero;






























