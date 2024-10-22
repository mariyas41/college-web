import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Inline styles for the landing page
  const landingStyle = {
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
    padding: '0',
    fontFamily: "'Arial', sans-serif",
    position: 'relative',
  };

  // Styles for the top-right corner navigation (Home, Register, Login)
  const topRightNavStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    gap: '20px',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2em',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  // Styles for the main navbar (Admissions, Courses, Department, About, Contact)
  const mainNavStyle = {
    position: 'absolute',
    top: '80px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    gap: '40px',
    zIndex: '100',
  };

  const headingStyle = {
    fontSize: '4em',
    marginBottom: '20px',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
  };

  const subheadingStyle = {
    fontSize: '1.8em',
    marginBottom: '40px',
    textShadow: '1px 1px 8px rgba(0, 0, 0, 0.8)',
  };

  return (
    <div style={landingStyle}>
      {/* Top-right corner navigation (Home, Register, Login) */}
      <div style={topRightNavStyle}>
        <Link to="/" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link>
        <Link to="/register" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Register</Link>
        <Link to="/login" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Login</Link>
      </div>

      {/* Main Navigation (Admissions, Courses, Department, About, Contact) */}
      <nav style={mainNavStyle}>
        <Link to="/admissions" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Admissions</Link>
        <Link to="/courses" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Courses</Link>
        <Link to="/department" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Department</Link>
        <Link to="/about" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>About</Link>
        <Link to="/contact" style={navLinkStyle} onMouseOver={(e) => e.target.style.color = 'yellow'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact</Link>
      </nav>

      {/* Main Content */}
      <div>
        <h1 style={headingStyle}>Noble Institute of Technology</h1>
        <p style={subheadingStyle}>Empowering Students for a Bright Future</p>
      </div>
    </div>
  );
};

export default LandingPage;
