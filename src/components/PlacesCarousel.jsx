import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Info } from 'lucide-react';
import './PlacesCarousel.css';

const places = [
  {
    id: 1,
    name: "Universal Studios Hollywood",
    location: "Los Angeles",
    rating: "4.8/5",
    reviews: "7,501",
    img: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 10
  },
 {
    id: 2,
    name: "Mount Fuji",
    location: "Japan",
    rating: "4.7/5",
    reviews: "62,100",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600",
    rank: 5
  },
  {
    id: 3,
    name: "Shanghai Disney Resort",
    location: "Shanghai",
    rating: "4.7/5",
    reviews: "286,722",
    img: "https://images.pexels.com/photos/3411135/pexels-photo-3411135.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 10
  },
  {
    id: 4,
    name: "Sagrada Familia",
    location: "Barcelona",
    rating: "4.7/5",
    reviews: "4,294",
    img: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 10
  },
  {
    id: 5,
    name: "Eiffel Tower",
    location: "Paris",
    rating: "4.9/5",
    reviews: "150,000",
    img: "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 1
  },
  {
    id: 6,
    name: "Grand Canyon",
    location: "Arizona",
    rating: "4.9/5",
    reviews: "85,400",
    img: "https://images.pexels.com/photos/2083144/pexels-photo-2083144.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 3
  },
  {
    id: 7,
    name: "Taj Mahal",
    location: "Agra",
    rating: "4.8/5",
    reviews: "110,200",
    img: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600", // Fixed Taj Mahal
    rank: 2
  },
  {
    id: 9,
    name: "Colosseum",
    location: "Rome",
    rating: "4.8/5",
    reviews: "95,000",
    img: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 4
  },
  {
    id: 10,
    name: "Burj Khalifa",
    location: "Dubai",
    rating: "4.9/5",
    reviews: "78,300",
    img: "https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=600", // Fixed Burj Khalifa
    rank: 1
  },
  {
    id: 11,
    name: "Statue of Liberty",
    location: "New York",
    rating: "4.6/5",
    reviews: "55,400",
    img: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=600",
    rank: 8
  },
];

const PlacesCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="places-section">
      <div className="places-header">
        <h2 className="section-title">Places you may like</h2>
        <a href="#" className="more-link">More <ChevronRight size={16} /></a>
      </div>

      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => scroll('left')}>
          <ChevronLeft size={20} />
        </button>
        
        <div className="scroll-area" ref={scrollRef}>
          {places.map((place) => (
            <div key={place.id} className="reel-card">
              <div className="image-containers">
                <img src={place.img} alt={place.name} className="reel-img" />
                
                {/* Top Badges */}
                <div className="top-badges">
                  <div className="trip-best">
                    <span className="laurel">{"{"}</span> Trip.Best <span className="laurel">{"}"}</span>
                  </div>
                  <button className="wishlist-btn">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Bottom Content Overlay */}
                <div className="content-overlay">
                  <div className="tag-row">
                    <span className="location-tag">{place.location}</span>
                    <span className="rank-tag">🔥 {place.rank}</span>
                  </div>
                  <h3 className="place-title">{place.name}</h3>
                  <p className="stats">
                    <strong>{place.rating}</strong> · {place.reviews} reviews
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={() => scroll('right')}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PlacesCarousel;