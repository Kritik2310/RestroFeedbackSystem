import { useNavigate } from 'react-router-dom';

export default function RestaurantCard({ rest }) {
  const nav = useNavigate();

  return (
    <div 
      className="restaurant-card" 
      onClick={() => nav(`/restaurant/${rest._id}`)}
    >
      {/* Image */}
      <div className="img-wrapper">
        <img src={rest.image} alt={rest.name} className="restaurant-img" />
      </div>

      {/* Info */}
      <div className="card-body">
        <h2 className="rest-name">{rest.name}</h2>
        <p className="rest-location">{rest.location}</p>

        <p className="rest-rating">
          ⭐ {rest.avgRating ? rest.avgRating : "No ratings yet"}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nav(`/restaurant/${rest._id}`);
        }}
        className="rest-btn"
      >
        View Feedbacks
      </button>
    </div>
  );
}
