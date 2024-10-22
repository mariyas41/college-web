import React, { useState } from 'react';

// Inline styles (same as Register component)
const sharedStyles = {
  pageStyle: {
    backgroundImage: "url('/college.jpeg')", // Ensure the path is correct
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
  },
  formStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  },
  inputStyle: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttonStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  },
  buttonHoverStyle: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div style={sharedStyles.pageStyle}>
      <h1>Login</h1>
      <form style={sharedStyles.formStyle} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={sharedStyles.inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={sharedStyles.inputStyle}
          required
        />
        <button
          type="submit"
          style={sharedStyles.buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)')}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
