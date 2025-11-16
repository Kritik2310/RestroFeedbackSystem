import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurant, postFeedback } from '../api/api';

export default function RestaurantPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [form, setForm] = useState({ username: '', rating: 5, comment: '' });
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    const res = await getRestaurant(id);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => { fetch(); }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await postFeedback({ restaurantId: id, ...form });
      setForm({ username: '', rating: 5, comment: '' });
      await fetch();
    } catch (err) {
      console.error(err);
      alert('Error adding feedback');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Restaurant not found</p>;

  return (
    <div className="restaurant-page">

      {/* Header Image */}
      <div className="restaurant-header">
        <img
          src={data.restaurant.image}
          alt={data.restaurant.name}
          className="header-img"
        />
      </div>

      {/* Basic Info */}
      <h1 className="res-title">{data.restaurant.name}</h1>
      <h3 className="res-subtitle">
        {data.restaurant.location} • ⭐ {data.restaurant.avgRating || "No ratings"}
      </h3>

      <p className="res-desc">{data.restaurant.description}</p>

      {/* FEEDBACK LIST */}
      <h2 className="section-title">Customer Feedback</h2>

      {data.feedbacks.length === 0 ? (
        <p className="no-feedback">No feedbacks yet — be the first to review this place!</p>
      ) : (
        <div className="feedback-list">
          {data.feedbacks.map((f) => (
            <div key={f._id} className="feedback-card">
              <div className="feedback-header">
                <strong>{f.username || "Anonymous"}</strong>
                <span className="feedback-rating">{f.rating}★</span>
              </div>

              <p className="feedback-comment">{f.comment}</p>
              <small className="feedback-date">
                {new Date(f.date).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      )}

      {/* FEEDBACK FORM */}
        <h2 className="section-title">Add Your Feedback</h2>

        <form className="feedback-form" onSubmit={submit}>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input
                className="form-input"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Enter your name"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Rating</label>
                <select
                className="form-input"
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                >
                <option value={5}>⭐ 5 - Excellent</option>
                <option value={4}>⭐ 4 - Good</option>
                <option value={3}>⭐ 3 - Average</option>
                <option value={2}>⭐ 2 - Poor</option>
                <option value={1}>⭐ 1 - Very Bad</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Comment</label>
                <textarea
                className="form-input textarea"
                rows="4"
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                placeholder="Share your experience..."
                />
            </div>

            <button className="submit-btn" type="submit">
                Submit Feedback
            </button>
        </form>
      {/* Footer */}
      <p className="footer-text">
        © {new Date().getFullYear()} Mumbai Restaurant Feedback System — Mini Project
      </p>
    </div>
  );
}
