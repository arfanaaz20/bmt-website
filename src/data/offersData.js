
/* ================= IMPORT IMAGES CATEGORY WISE ================= */

/* FLIGHTS */
import flight1 from "../assets/flights/flight1.jpg";
import flight2 from "../assets/flights/flight2.jpg";

/* BANK */
import bank1 from "../assets/bank/bank1.jpg";
import bank2 from "../assets/bank/bank2.jpg";

/* HOTELS */
import hotel1 from "../assets/hotels/hotel1.jpg";
import hotel2 from "../assets/hotels/hotel2.jpg";

/* BUS */
import bus1 from "../assets/bus/bus1.jpg";
import bus2 from "../assets/bus/bus2.jpg";

/* TRAIN */
import train1 from "../assets/train/train1.jpg";
import train2 from "../assets/train/train2.jpg";

/* ================= OFFERS DATA ================= */

const offersData = [
  /* ---------- FLIGHTS ---------- */
  {
    id: 1,
    category: "flights",
    title: "Unlock Big Savings on Flights",
    description: "Up to 15% instant discount on domestic & international flights.",
    code: "FLY15",
    cta: "VIEW DETAILS",
    image: flight1,
  },
  {
    id: 2,
    category: "flights",
    title: "Student Fare Special",
    description: "Extra baggage & discounted fares for students.",
    code: "STUDENT",
    cta: "BOOK NOW",
    image: flight2,
  },

  /* ---------- BANK ---------- */
  {
    id: 3,
    category: "bank",
    title: "HDFC Bank Credit Card Offer",
    description: "Flat ₹1500 OFF on flights & hotels.",
    code: "HDFC1500",
    cta: "APPLY NOW",
    image: bank1,
  },
  {
    id: 4,
    category: "bank",
    title: "ICICI Bank Festive Offer",
    description: "Save up to ₹2000 using ICICI cards.",
    code: "ICICI2000",
    cta: "GRAB DEAL",
    image: bank2,
  },

  /* ---------- HOTELS ---------- */
  {
    id: 5,
    category: "hotels",
    title: "Luxury Hotel Stays",
    description: "Flat 25% OFF on premium hotels.",
    code: "HOTEL25",
    cta: "BOOK NOW",
    image: hotel1,
  },
  {
    id: 6,
    category: "hotels",
    title: "Budget Friendly Hotels",
    description: "Comfortable stays at best prices.",
    code: "STAY10",
    cta: "BOOK NOW",
    image: hotel2,
  },

  /* ---------- BUS ---------- */
  {
    id: 7,
    category: "bus",
    title: "The Great Bus Booking Fest",
    description: "Flat discounts on bus tickets across India.",
    code: "BUSSAVE",
    cta: "BOOK NOW",
    image: bus1,
  },
  {
    id: 8,
    category: "bus",
    title: "AC Bus Deals",
    description: "Save more on AC sleeper & seater buses.",
    code: "ACBUS",
    cta: "VIEW DETAILS",
    image: bus2,
  },

  /* ---------- TRAIN ---------- */
  {
    id: 9,
    category: "train",
    title: "Train Ticket Booking Offer",
    description: "Zero convenience fee on train tickets.",
    code: "TRAIN0",
    cta: "BOOK NOW",
    image: train1,
  },
  {
    id: 10,
    category: "train",
    title: "Tatkal Booking Support",
    description: "Fast & secure tatkal booking assistance.",
    code: "",
    cta: "CHECK AVAILABILITY",
    image: train2,
  },
];

export default offersData;
