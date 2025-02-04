import React from 'react';
import './still.css';

const index = ({ title, description }) => {
  return (
    <div className='PageHeaderContainer'>
      <div className='PageHeaderBanner'></div>
      <div className='PageHeaderDesc'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default index;