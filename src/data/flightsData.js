// import f1 from "../assets/flights/flight1.jpg";
// import f2 from "../assets/flights/flight2.jpg";
// import f3 from "../assets/flights/flight3.jpg";

// const flights = [
//   {
//     id: 1,
//     airline: "IndiGo",
//     from: "Delhi",
//     to: "Mumbai",
//     time: "10:30 AM - 12:45 PM",
//     price: 5500,
//     type: "Non Stop",
//     image: f1,
//   },
//   {
//     id: 2,
//     airline: "Air India",
//     from: "Delhi",
//     to: "Bangalore",
//     time: "02:00 PM - 04:50 PM",
//     price: 7200,
//     type: "1 Stop",
//     image: f2,
//   },
//   {
//     id: 3,
//     airline: "Vistara",
//     from: "Mumbai",
//     to: "Goa",
//     time: "06:15 AM - 07:30 AM",
//     price: 4800,
//     type: "Non Stop",
//     image: f3,
//   },
// ];

// export default flights;







import f1 from "../assets/flights/flight1.jpg";
import f2 from "../assets/flights/flight2.jpg";
import f3 from "../assets/flights/flight3.jpg";

const flights = [
  {
    id: 1,
    airline: "IndiGo",
    flightNo: "6E 203",
    from: "Delhi",
    to: "Mumbai",
    time: "10:30 AM - 12:45 PM",
    price: 5500,
    type: "Non Stop",
    terminal: "T2",
    gate: "32B",
    status: "On Time",
    image: f1,
    times: {
  Scheduled: "10:30",
  Boarding: "10:00",
  Departed: "10:35",
  Arrived: "--",
},

  },
  {
    id: 2,
    airline: "Air India",
    flightNo: "AI 865",
    from: "Delhi",
    to: "Bangalore",
    time: "02:00 PM - 04:50 PM",
    price: 7200,
    type: "1 Stop",
    terminal: "T3",
    gate: "18A",
    status: "Delayed",
    delayReason: "Operational delay",
    image: f2,
    times: {
  Scheduled: "10:30",
  Boarding: "10:00",
  Departed: "10:35",
  Arrived: "--",
},

  },
  {
    id: 3,
    airline: "Vistara",
    flightNo: "UK 933",
    from: "Mumbai",
    to: "Goa",
    time: "06:15 AM - 07:30 AM",
    price: 4800,
    type: "Non Stop",
    terminal: "T2",
    gate: "--",
    status: "Cancelled",
    delayReason: "Bad weather",
    image: f3,
    times: {
  Scheduled: "10:30",
  Boarding: "10:00",
  Departed: "10:35",
  Arrived: "--",
},

  },
];

export default flights;

