import React from 'react';

const InformationSection = () => {
  const sectionStyle = {
    backgroundColor: '#dfe6e1', // Background color similar to the image
    padding: '20px 40px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
  };

  const contentStyle = {
    margin: '50px auto 80px auto', // Centered horizontally and vertically
    textAlign: 'left',
    maxWidth: '300px', // Ensures the content is properly constrained
  };

  const headingStyle = {
    color: '#2f5d3a', // Green color for the heading
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333',
    textDecoration: 'none',
  };

  return (
    <div style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Information</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>About Us</li>
          <li style={listItemStyle}>Terms and Conditions</li>
          <li style={listItemStyle}>Privacy Policy</li>
          <li style={listItemStyle}>Privacy Policy for Mobile Apps</li>
          <li style={listItemStyle}>Shipping and Returns Policy</li>
          <li style={listItemStyle}>International Delivery</li>
          <li style={listItemStyle}>For Businesses, Hotels and Resorts</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationSection;
