import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TrailIndex from "../../components/trailIndex/TrailIndex";
import './homepage.css';

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [trails, setTrails] = useState([]); // Added state for trails

  useEffect(() => {
    // Mock data. In a real-world scenario, you'd probably fetch this from an API.
    setTrails([
      { _id: '1', name: 'Trail A', location: 'Location A', difficulty: 'Easy', miles: '5' + ' miles', picture: 'url1', createdAt: '10/10/2021' },
      // ... you can add more mock trails here
    ]);

    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <section className="homepage">
      <div className="slideshow">
        <div className="slide fade" id="slide1">
          <div className="slide-content">
            <h2>Adventure Awaits!</h2>
            <Link to="/HikeSearch">Search for your next Adventure</Link>
          </div>
        </div>
        <div className="slide fade" id="slide2">
          <div className="slide-content">
            <h2>Create your own Hikes/Trails!</h2>
            <Link to="/HikeSearch">Search for your next Adventure</Link>
          </div>
        </div>
        <div className="slide fade" id="slide3">
          <div className="slide-content">
            <h2>Check Out Our Hiking Guide!</h2>
            <Link to="/HikeSearch">Search for your next Adventure</Link>
          </div>
        </div>
      </div>
      <TrailIndex trails={trails} /> {/* Passing the trails state to TrailIndex component */}
    </section>
  );
}

export default HomePage;