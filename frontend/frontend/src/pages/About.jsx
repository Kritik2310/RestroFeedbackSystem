export default function About() {
  return (
    <div className="about-page">

      {/* Title Section */}
      <h1 className="about-title">About This Project</h1>
      <p className="about-subtitle">
        A café-aesthetic platform built to help people discover the best restaurants in Mumbai 
        through real user feedback & honest ratings.
      </p>

      {/* Project Description */}
      <div className="about-card">
        <h2 className="section-heading">🌟 Mini-Project Overview</h2>
        <p>
          This mini-project is designed as a complete feedback and rating system for 
          restaurants in Mumbai. The goal is to build a clean, user-friendly interface 
          where people can view restaurants, read feedback, and submit their own reviews. 
        </p>

        <p>
          The system highlights top-rated restaurants, trending places, and even the 
          <strong>“Most Loved Café Today”</strong> based on real-time user feedback.
        </p>
      </div>

      {/* Features */}
      <div className="about-card">
        <h2 className="section-heading">✨ Key Features</h2>
        <ul className="feature-list">
          <li>View top-rated restaurants based on feedback</li>
          <li>Trending restaurants based on review count</li>
          <li>Most Loved Café of the day</li>
          <li>Submit feedback with rating & comments</li>
          <li>Detailed restaurant pages with reviews</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="about-card">
        <h2 className="section-heading">🛠️ Technology Used</h2>
        <ul className="tech-list">
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Backend:</strong> Node.js + Express</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Styling:</strong> Custom CSS </li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="about-card">
        <h2 className="section-heading">👩‍💻 Team Members</h2>
        <ul className="team-list">
          <li><strong>Kriti Kashyap</strong> — UI Designer</li>
          <li><strong>Harshika Bodekar</strong>  — Backend Developer</li>
          <li><strong>Mayur Patil</strong> — Database Integration</li> 
        </ul>

        <h3 className="mentor-title">🎓 Guided By</h3>
        <p className="mentor-name">Nikhil Aggarwal</p>
      </div>

      {/* Footer */}
      <p className="footer-text">
        © {new Date().getFullYear()} Mumbai Restaurant Feedback System — Mini Project
      </p>

    </div>
  );
}
