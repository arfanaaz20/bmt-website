import { toursImages } from "./toursImages";

export const toursData = [
  {
    title: "International Tours",
    subtitle: "Explore top global destinations",
    items: [
      { name: "Dubai City Tour", image: toursImages.international[0] },
      { name: "Singapore Highlights", image: toursImages.international[1] },
      { name: "European Escape", image: toursImages.international[2] },
    ],
  },
  {
    title: "India Tours",
    subtitle: "Discover the beauty of India",
    items: [
      { name: "Kashmir Paradise", image: toursImages.india[0] },
      { name: "Goa Beach Holiday", image: toursImages.india[1] },
      { name: "Royal Rajasthan", image: toursImages.india[2] },
    ],
  },
  {
    title: "Adventure & Activities",
    subtitle: "Thrilling experiences await",
    items: [
      { name: "Desert Safari", image: toursImages.adventure[0] },
      { name: "River Rafting", image: toursImages.adventure[1] },
      { name: "Sky Diving", image: toursImages.adventure[2] },
    ],
  },
  {
    title: "Attractions & Theme Parks",
    subtitle: "Fun-filled attractions worldwide",
    items: [
      { name: "Theme Park Adventure", image: toursImages.attractions[0] },
      { name: "Water Park Fun", image: toursImages.attractions[1] },
      { name: "City Attractions", image: toursImages.attractions[2] },
    ],
  },
];
