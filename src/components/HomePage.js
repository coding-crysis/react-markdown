import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      style={{
        maxWidth: 400,
        borderWidth: 1,
      }}
    >
      <h1>React Coding Challange</h1>
      <Link exact to="/">
        Challange Url
      </Link>
    </div>
  );
};

export default HomePage;
