import h1 from "../assets/hotels/hotel1.jpg";
import h2 from "../assets/hotels/hotel2.jpg";
import h3 from "../assets/hotels/hotel3.jpg";

const hotels = [
  {
    id: 1,
    name: "Taj Palace",
    city: "Delhi",
    price: 8500,
    rating: 4.8,
    image: h1,
    description: "5 Star luxury hotel with premium services",
  },
  {
    id: 2,
    name: "The Oberoi",
    city: "Mumbai",
    price: 10500,
    rating: 4.9,
    image: h2,
    description: "Sea-facing hotel with world class amenities",
  },
  {
    id: 3,
    name: "ITC Grand",
    city: "Bangalore",
    price: 7200,
    rating: 4.6,
    image: h3,
    description: "Perfect for business & family stays",
  },
];

export default hotels;
