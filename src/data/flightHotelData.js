/* HOTEL IMAGES (already used earlier) */
import hotel1 from "../assets/hotels/hotel1.jpg";
import hotel2 from "../assets/hotels/hotel2.jpg";
import hotel3 from "../assets/hotels/hotel3.jpg";

/* FLIGHT IMAGES (already used earlier) */
import flight1 from "../assets/flights/flight1.jpg";
import flight2 from "../assets/flights/flight2.jpg";
import flight3 from "../assets/flights/flight3.jpg";

const combos = [
  {
    id: 1,
    hotel: "Taj Palace",
    airline: "IndiGo",
    from: "Delhi",
    to: "Mumbai",
    nights: "2 Nights",
    price: 14500,

    /* 🔥 SAME IMAGE (hotel + flight) */
    hotelImage: hotel1,
    flightImage: flight1,
  },
  {
    id: 2,
    hotel: "The Oberoi",
    airline: "Vistara",
    from: "Delhi",
    to: "Bangalore",
    nights: "3 Nights",
    price: 19800,
    hotelImage: hotel2,
    flightImage: flight3,
  },
  {
    id: 3,
    hotel: "ITC Grand",
    airline: "Air India",
    from: "Mumbai",
    to: "Goa",
    nights: "2 Nights",
    price: 16200,
    hotelImage: hotel3,
    flightImage: flight2,
  },
];

export default combos;
