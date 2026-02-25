import bus1 from "../assets/bus/bus1.jpg";
import bus2 from "../assets/bus/bus2.jpg";
import bus3 from "../assets/bus/bus3.jpg";

const buses = [
  {
    id: 1,
    operator: "Volvo Travels",
    from: "Delhi",
    to: "Jaipur",
    time: "08:00 PM - 01:00 AM",
    type: "AC Sleeper",
    price: 899,
    image: bus1,
  },
  {
    id: 2,
    operator: "RedBus Express",
    from: "Chandigarh",
    to: "Manali",
    time: "09:30 PM - 06:00 AM",
    type: "AC Semi Sleeper",
    price: 1299,
    image: bus2,
  },
  {
    id: 3,
    operator: "Himachal Roadways",
    from: "Shimla",
    to: "Delhi",
    time: "07:00 PM - 05:00 AM",
    type: "Non AC Seater",
    price: 699,
    image: bus3,
  },
];

export default buses;
