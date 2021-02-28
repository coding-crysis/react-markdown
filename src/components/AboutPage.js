import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h1 className="alt-header">About us</h1>
      <p>
        CityMall is a social e-commerce venture, backed by Elevation Capital,
        aiming to help the 200-300 million new to Internet users realize the
        power of Internet and e-commerce. CityMall has a vision to create
        India’s largest chain of virtual stores on WhatsApp. Through a network
        of neighbourhood community leaders, CityMall enables Bharat to
        experience the convenience of online commerce. Founded by IIT Delhi and
        IIT Roorkee alumni with 8+ years of entrepreneurial experience, CityMall
        aims to create several thousands of such micro-entrepreneurs and empower
        them to create the go-to e-commerce platform for Bharat.
      </p>
    </div>
  );
};

export default AboutPage;
