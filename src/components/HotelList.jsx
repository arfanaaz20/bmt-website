import React from 'react';
import './HotelCard.css';

const hotels = [
  { id: 1, city: "Cape Town", name: "Mount Nelson, A Belmond Hotel", stars: 5, rating: "9.7", reviews: 53, price: "116,565", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
  { id: 2, city: "New York", name: "The St. Regis New York", stars: 5, rating: "9.4", reviews: 42, price: "100,505", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400" },
  { id: 3, city: "Bangkok", name: "Capella Bangkok", stars: 5, rating: "9.3", reviews: 212, price: "108,450", oldPrice: "122,632", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
  { id: 4, city: "Paranaque", name: "Okada Manila", stars: 5, rating: "9.0", reviews: 201, price: "20,568", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400" },
  { id: 5, city: "Bali", name: "Ubud Hanging Gardens", stars: 5, rating: "9.8", reviews: 955, price: "75,999", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400" },
  { id: 6, city: "Dubai", name: "Address Downtown", stars: 5, rating: "9.8", reviews: 305, price: "92,300", oldPrice: "105,000", img: "https://images.unsplash.com/photo-1512918766674-ed62b90eaa9c?w=400" }
];

const HotelList = () => {
  return (
    <div className="main-wrapper">
      <div className="header-row">
        <h2>Stay cosy at our handpicked hotels</h2>
        <a href="#more" className="more-link">More &gt;</a>
      </div>
      
      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <div className="image-wrapper">
              <img src={hotel.img} alt={hotel.name} />
              <button className="wishlist-btn">❤️</button>
            </div>
            <div className="content-wrapper">
              <p className="city-name">{hotel.city}</p>
              <h3 className="hotel-title">{hotel.name}</h3>
              <div className="stars">{"★".repeat(hotel.stars)}</div>
              <div className="rating-row">
                <span className="rating-badge">{hotel.rating}/10</span>
                <span className="review-text">{hotel.reviews} reviews</span>
              </div>
              <div className="price-tag">
                <span className="from-text">From</span> ₹ {hotel.price}
                {hotel.oldPrice && <span className="old-price">₹ {hotel.oldPrice}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;