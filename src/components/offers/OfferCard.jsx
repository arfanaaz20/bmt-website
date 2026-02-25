
import { useNavigate } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const navigate = useNavigate();

  const goToDetails = () => navigate(`/offer/${offer.id}`);

  return (
    <article className="offer-card" onClick={goToDetails}>
      {/* Image with hover effect */}
      <div className="image-container" style={{ overflow: 'hidden' }}>
        <img
          src={offer.image}
          alt={offer.title}
          className="offer-image"
          loading="lazy"
        />
      </div>

      <div className="card-body">
        {/* Category and code */}
        <div className="card-top">
          <span className="category">{offer.category}</span>
          <span className="code">Code: {offer.code}</span>
        </div>

        {/* Title and description */}
        <h3 className="title">{offer.title}</h3>
        <p className="desc">{offer.description}</p>

        {/* Action buttons */}
        <div className="offer-actions">
          <button 
            className="btn primary" 
            onClick={(e) => {
              e.stopPropagation();
              goToDetails();
            }}
          >
            Book now
          </button>
          <button 
            className="btn outline" 
            onClick={(e) => {
              e.stopPropagation();
              goToDetails();
            }}
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
};

export default OfferCard;