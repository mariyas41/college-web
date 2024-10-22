import React, { useState } from 'react';

const About = () => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review) {
      setReviews([...reviews, review]);
      setReview('');
    }
  };

  // Inline styles
  const aboutStyle = {
    backgroundImage: "url('/college.jpeg')", // Ensure this path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  };

  const inputStyle = {
    width: '300px',
    height: '100px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  };

  return (
    <div style={aboutStyle}>
      <h1>About Our College</h1>
      <form onSubmit={handleReviewSubmit} style={formStyle}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Submit Review</button>
      </form>
      <div>
        <h2>Reviews:</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {reviews.map((r, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
