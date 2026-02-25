/* 🚆 TRAIN IMAGES (ASSETS IMPORT) */
import train1 from "../assets/train/train1.jpg";
import train2 from "../assets/train/train2.jpg";
import train3 from "../assets/train/train3.jpg";

const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    from: "Delhi",
    to: "Mumbai",
    time: "16:30 - 08:15",
    type: "AC First Class",
    price: 2450,
    image: train1,
  },
  {
    id: 2,
    name: "Shatabdi Express",
    from: "Delhi",
    to: "Chandigarh",
    time: "07:00 - 11:05",
    type: "AC Chair Car",
    price: 1250,
    image: train2,
  },
  {
    id: 3,
    name: "Duronto Express",
    from: "Kolkata",
    to: "Delhi",
    time: "20:00 - 06:45",
    type: "Sleeper",
    price: 950,
    image: train3,
  },
];

export default trains;
