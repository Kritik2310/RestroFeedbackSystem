import { useEffect, useState } from "react";
import { getTopRated, getTrending, getMostLoved } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [mostLoved, setMostLoved] = useState(null);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const top = await getTopRated();
        const tren = await getTrending();
        const loved = await getMostLoved();

        setTopRated(top.data);
        setTrending(tren.data);
        setMostLoved(loved.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        alert("Error loading top restaurants");
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="top-page">

      <h1 className="top-title">⭐ Top Rated Restaurants</h1>
      <p className="top-subtitle">Handpicked by Mumbai food lovers</p>

      {/* MOST LOVED */}
      {mostLoved && (
        <div
          className="highlight-card"
          onClick={() => nav(`/restaurant/${mostLoved._id}`)}
        >
          <img src={mostLoved.image} className="highlight-img" />

          <div className="highlight-text">
            <h2>💛 Most Loved Café Today</h2>
            <h3>{mostLoved.name}</h3>
            <p className="highlight-rating">
              ⭐ {mostLoved.avgRating} — {mostLoved.feedbackCount} reviews
            </p>
          </div>
        </div>
      )}

      {/* TOP RATED */}
      <h2 className="section-heading">Top 5 Restaurants</h2>
      <div className="top-grid">
        {topRated.map((rest) => (
          <div
            key={rest._id}
            className="rated-card"
            onClick={() => nav(`/restaurant/${rest._id}`)}
          >
            <img src={rest.image} className="rated-img" />
            <div className="rated-info">
              <h3>{rest.name}</h3>
              <p className="loc">{rest.location}</p>
              <p className="star">⭐ {rest.avgRating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TRENDING */}
      <h2 className="section-heading">🔥 Trending Restaurants</h2>
      <div className="top-grid">
        {trending.map((rest) => (
          <div
            key={rest._id}
            className="rated-card"
            onClick={() => nav(`/restaurant/${rest._id}`)}
          >
            <img src={rest.image} className="rated-img" />
            <div className="rated-info">
              <h3>{rest.name}</h3>
              <p className="loc">{rest.location}</p>
              <p className="star">{rest.feedbackCount} reviews</p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <p className="footer-text">
        © {new Date().getFullYear()} Mumbai Restaurant Feedback System — Mini Project
      </p>
    </div>
  );
}
