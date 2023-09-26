import React from 'react';
import './home.css';

function Home() {
  return (
    <div >
      <section className="hero">
        <h1>Welcome to Your Website</h1>
        <p>Your source for amazing content.</p>
        <a href="#" className="cta-button">Learn More</a>
      </section>
      <footer>
        <p>&copy; 2023 Your Website</p>
      </footer>
    </div>
  );
}

export default Home;
